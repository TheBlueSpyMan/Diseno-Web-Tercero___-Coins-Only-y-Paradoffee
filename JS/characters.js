const images = ["huesitos", "leemur",  "piojosa", "maricarmen", "rabanejo"];
const chcharacterNames = {
    "huesitos": "Huesito",    "leemur": "Leemur",
        "piojosa": "Piojosa", "maricarmen": "Maricarmen",
    "rabanejo": "Rabanejo"
};
const leverImages = ["lever", "reverse-lever"];
let currentIndex = 0;
let isFlipped = false;
const charImage = document.querySelector(".ch");
const clickSound = new Audio('./Media/Sonidos/ClickBoton.mp3');

function playLeverSound() {
    clickSound.currentTime = 0; 
    clickSound.play();
}

function changeCharacter(button) {    
    const leverImage = document.querySelector(".lever"); 
    if (charImage) {
        playLeverSound();
        charImage.style.transform = "translateX(-500px) scale(2)";
        charImage.style.opacity = "0";
        leverImage.src = `Media/Resources/Img/Characters/${leverImages[1]}.png`;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            charImage.src = `Media/Resources/Img/Characters/${images[currentIndex]}.png`;

            charImage.style.transform = "translateX(500px) scale(2)";
            
            setTimeout(() => {
                playLeverSound();
                charImage.style.transform = "translateX(0) scale(2)"; 
                charImage.style.opacity = "1"; 
                leverImage.src = `Media/Resources/Img/Characters/${leverImages[0]}.png`;
            }, 50); 
        }, 500); 
    }
}

function saveCharacter() {
    localStorage.setItem("selectedCharacter", currentIndex+1);
    window.location.href = "menu.html"; 
}