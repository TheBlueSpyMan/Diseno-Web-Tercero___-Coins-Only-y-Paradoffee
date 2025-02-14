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

function changeCharacter() {    
    const leverImage = document.querySelector(".lever"); // Asegúrate de que la imagen tenga la clase "lever"
    if (charImage) {
        // Mover a la izquierda y hacer fade out
        
        charImage.style.transform = "translateX(-500px) scale(2)";
        charImage.style.opacity = "0";
        leverImage.src = `Media/Resources/Img/Characters/${leverImages[1]}.png`;
        // Esperar a que termine la animación antes de cambiar la imagen
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            charImage.src = `Media/Resources/Img/Characters/${images[currentIndex]}.png`;

            // Mover hacia la derecha antes de volver a la posición inicial
            charImage.style.transform = "translateX(500px) scale(2)";
            
            setTimeout(() => {
                charImage.style.transform = "translateX(0) scale(2)"; // Volver a la posición original
                charImage.style.opacity = "1"; // Volver a hacer visible
                leverImage.src = `Media/Resources/Img/Characters/${leverImages[0]}.png`;
            }, 50); // Pequeño retraso para hacer el cambio más natural
        }, 500); // Esperar 500ms para cambiar la imagen
    }
}

function saveCharacter() {
    localStorage.setItem("selectedCharacter", currentIndex+1);
    window.location.href = "menu.html"; 
}