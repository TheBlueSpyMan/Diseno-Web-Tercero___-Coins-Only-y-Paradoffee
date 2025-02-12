let currentIndex = 0;
const characters = document.querySelectorAll(".characterCH");

console.log("Personajes detectados:", characters.length);

characters[currentIndex].classList.add("characterCH-active");

function changeCharacter() {
    console.log("Palanca activada. Cambiando personaje...");
    
    characters[currentIndex].classList.remove("characterCH-active");
    characters[currentIndex].classList.add("characterCH");
    
    currentIndex = (currentIndex + 1) % characters.length;
    
    characters[currentIndex].classList.add("characterCH-active");
    characters[currentIndex].classList.remove("characterCH");

    console.log("Nuevo personaje activo:", currentIndex);
}