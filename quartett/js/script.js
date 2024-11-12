const imageMapping = {
    1: "a1.jpg",
    2: "a2.jpg",
    3: "a3.jpg",
    4: "a4.jpg",
    5: "b1.jpg",
    6: "b2.jpg",
    7: "b3.jpg",
    8: "b4.jpg",
    9: "c1.jpg",
    10: "c2.jpg",
    11: "c3.jpg",
    12: "c4.jpg",
    13: "d1.jpg",
    14: "d2.jpg",
    15: "d3.jpg",
    16: "d4.jpg",
    17: "e1.jpg",
    18: "e2.jpg",
    19: "e3.jpg",
    20: "e4.jpg",
    21: "f1.jpg",
    22: "f2.jpg",
    23: "f3.jpg",
    24: "f4.jpg",
    25: "g1.jpg",
    26: "g2.jpg",
    27: "g3.jpg",
    28: "g4.jpg",
    29: "h1.jpg",
    30: "h2.jpg",
    31: "h3.jpg",
    32: "h4.jpg",
};

$(document).ready(function () {
    const cardContainer = $("#card-container");
    const groupColors = {
        A: 'rgba(245, 181, 47, 0.8)',    
        // A: 'linear-gradient(180deg, rgba(245, 181, 47, 0.8), rgba(184, 136, 35, 0.9))',
        B: 'rgba(120, 184, 70, 0.8)',    
        C: 'rgba(222, 196, 156, 0.8)',   
        D: 'rgba(69, 123, 157, 0.8)',  
        E: 'rgba(144, 101, 157, 0.8)', 
        F: 'rgba(105, 105, 105, 0.8)', 
        G: 'rgba(112, 89, 69, 0.8)',
        H: 'rgba(193, 66, 66, 0.8)' 
    };

    data.forEach((item, index) => {
        const imageSrc = `/quartett/images/quartett-images/${imageMapping[item.id]}`;
        const backgroundColor = groupColors[item.group] || 'rgba(248, 224, 0, 0.7)';
        const cardHtml = `
             <div class="card-wrapper" style="background: ${backgroundColor}">
            <div class="top-section">
            <div class="card-id">
            <p> ${item.group} ${['1', '2', '3', '4'][index % 4]}</p>
            </div>
            <div class="card-title">
            <p>${item.name_german}</p>
            </div>
            </div>
            <div class="image-section">
            <img src="${imageSrc}" alt="${item.name}" class="img-respo">
            </div>
            <div class="trivia-section">
            <p class="trivia-style">${item.trivia_german}</p>
            </div>
            <div class="main-section">
            <div class="left-main-section">
            <div class="attribute-section">
                <div class="icon weight">
                <img src="/quartett/images/icons/weight.png" class="scaleLOL" alt="Weight Icon"/>
                </div>
                <div class="value weight">
                <p class="value-text">${item.max_weight} kg</p>
                </div>
            </div>
            <div class="attribute-section">
                <div class="icon age">
                <img src="/quartett/images/icons/age.png" class="scaleLOL" alt="Age Icon"/>
                </div>
                <div class="value age">
                <p class="value-text">${item.max_age} Jahre</p>
                </div>
            </div>
            <div class="attribute-section">
                <div class="icon speed">
                <img src="/quartett/images/icons/speed.png" class="scaleLOL" alt="Speed Icon"/>
                </div>
                <div class="value speed">
                <p class="value-text">${item.top_speed} kmh</p>
                </div>
            </div>
            </div>
            <div class="right-main-section">
            <div class="attribute-section">
                <div class="icon length">
                <img src="/quartett/images/icons/length.png" class="scaleLOL" alt="Size Icon"/>
                </div>
                <div class="value length">
                <p class="value-text">${item.max_length} cm</p>
                </div>
            </div>
            <div class="attribute-section">
                <div class="icon death">
                <img src="/quartett/images/icons/death.png" class="scaleLOL" alt="Death Icon"/>
                </div>
                <div class="value death">
                <p class="value-text">${item.deaths} ${item.deaths === 1 ? 'kill' : 'kills'}</p>
                </div>
            </div>
            <div class="attribute-section">
                <div class="icon intelligence">
                <img src="/quartett/images/icons/offspring.png" class="scaleLOL" alt="Offspring Icon"/>
                </div>
                <div class="value intelligence">
                <p class="value-text">${item.intelligence}</p>
                </div>
            </div>
            </div>
            </div>
            </div>`;

        cardContainer.append(cardHtml);
    });
});

function shuffleCards() {
    let originalOrder = $(".card-wrapper").toArray(); 

    $("#shuffle-button").click(function () {
        const cards = $(".card-wrapper").toArray();
        const shuffledCards = cards.sort(() => Math.random() - 0.5);
        $("#card-container").html(shuffledCards); 
    });

    $("#reset-button").click(function () {
        location.reload(); 
    });
}

shuffleCards();

function sortCards(attribute) {
    const cards = $(".card-wrapper").toArray();
    cards.sort((a, b) => {
        const aValue = parseFloat($(a).find(`.${attribute} .value-text`).text());
        const bValue = parseFloat($(b).find(`.${attribute} .value-text`).text());
        return aValue - bValue;
    });
    $("#card-container").html(cards);
}

$("#sort-weight").click(function () {
    sortCards("weight");
});

$("#sort-age").click(function () {
    sortCards("age");
});

$("#sort-speed").click(function () {
    sortCards("speed");
});

$("#sort-length").click(function () {
    sortCards("length");
});

$("#sort-death").click(function () {
    sortCards("death");
});

$("#sort-intelligence").click(function () {
    sortCards("intelligence");
});


$("#shuffle-button").click(function () {
    const shuffledData = gmynd.shuffleArray([...data]);
    renderCards(shuffledData);
});

$("#reset-button").click(function () {
    renderCards(data); 
});