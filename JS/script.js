$(document).ready(function(){
    console.log("jQuery Funciona");
    
})

// document.addEventListener("DOMContentLoaded", () => {
//     const image = document.getElementById("toggleImage");
//     setTimeout(() => {
//         image.classList.remove("hidden");
//         image.classList.add("visible");
//         setTimeout(() => {
//             image.addEventListener("click", () => {
//                 image.classList.remove("visible");
//                 image.classList.add("hidden");
//             });
//         }, 7000);
//     }, 3000);
// });

/* DATOS DE LOS PERSONAJES */

let selectedCharacter = 0; 
const characterNames = [
    "Huesito",
    "Lepion",
    "Pijus",
    "Rústica",
    "Zananejo"
];

function updateCharacter(characterIndex) {
    $(".characterMenu").hide();
    $("#charactermenu-" + characterIndex).show();
    $("#text-box").text(characterNames[characterIndex - 1]);
    updatePlayButton();
}

function updatePlayButton() {
    const playButton = $("#button-play");

    if (selectedCharacter === 0) {
        playButton.css({
            "background-color": "black",
            "cursor": "not-allowed",
            "opacity": "0.5"
        }).off("click"); 
    } else {
        playButton.css({
            "background-color": "#2c3434",
            "cursor": "pointer",
            "opacity": "1",
            "font-family": "'Chewy', serif",  
            "color": " #e8f8d8"
        }).text("ADELANTE GRANUJA")  
        .off("click")
        .on("click", function() {
            window.location.href = "juego.html"; 
        });
    }
}

/* CAMBIAR PAGINA A CARTAS */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("select-payment");
    
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "cartas.html";
        });
    } else {
        console.error("El botón con ID 'select-payment' no se encontró.");
    }
});



$("#select-client").on("click", function() {
    selectedCharacter = (selectedCharacter % 5) + 1; 
    updateCharacter(selectedCharacter);
});

updateCharacter(selectedCharacter);



/* FLIPEAR CARTAS POR CLICK */

const shopCards = document.querySelectorAll('.shopcard');
let gameOver = false; 

const flipSound = new Audio('./Media/Sonidos/GirarCarta.mp3');
const correctSound = new Audio('./Media/Sonidos/Correcto.mp3');

shopCards.forEach(card => {
    card.addEventListener('click', () => {
        if (gameOver || card.classList.contains('flipped')) return; 

        card.classList.add('flipped');
        flipSound.currentTime = 0;
        flipSound.play();

        if (card.classList.contains('correct-card')) {
            gameOver = true;
            flipSound.currentTime = 0;
            flipSound.play();
            correctSound.play(); 

            setTimeout(() => {
                window.location.href = 'menu.html';
            }, 3000);
        }
    });
});