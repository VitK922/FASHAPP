const categories = {
    addons: {
        images: [
            "images/hat3.png",
            "images/cepiceNY.png",
        ],
index: 0,
element: document.getElementById("addons"),
nextBtn: "0nextBtn",
prevBtn: "0prevBtn",
},
tops: {
    images: [
        "images/stussy tee.png",
        "images/supremetee.png",
    ],
    index: 0, 
    element: document.getElementById("tops"),
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn",
},
bottoms: {
    images: [
        "images/pants big boy.png",
        "images/pants2 breshka.png",
        "images/polar jorts2.png",
        "images/carharttjortsfront.png",
    ],
    index: 0, 
    element: document.getElementById("bottoms"),
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn",
},
shoes: {
    images: [
        "images/adidas boty.png",
        "images/asics boty.png",
    ],
    index: 0, 
    element: document.getElementById("shoes"),
    nextBtn: "3nextBtn",
    prevBtn: "3prevBtn",
},
}

function setupButtons() {
    for (const cat in categories) {
        const category = categories[cat];
        document.getElementById(category.nextBtn).addEventListener("click", () => {
            category.index = (category.index + 1) % category.images.length;
            updateImage(cat);
        });
        document.getElementById(category.prevBtn).addEventListener("click", () => {
            category.index = 
                (category.index - 1 + category.images.length) % category.images.length;
            updateImage(cat);
        });
    }
}

function randomize() {
    for (const cat in categories) {
        const category = categories[cat];
        category.index = Math.floor(Math.random() * category.images.length);
        updateImage(cat);
    }
    createConfetti();
}

document.getElementById("random-btn").addEventListener("click", randomize);

for (const cat in categories){
    updateImage(cat);
}

setupButtons();

function updateImage(cat){

    const category =
    categories[cat];

    category.element.src =
    category.images[category.index];
}

