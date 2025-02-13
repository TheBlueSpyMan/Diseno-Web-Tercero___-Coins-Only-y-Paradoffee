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

$("#select-client").on("click", function() {
    selectedCharacter = (selectedCharacter % 5) + 1; 
    updateCharacter(selectedCharacter);
});

updateCharacter(selectedCharacter);