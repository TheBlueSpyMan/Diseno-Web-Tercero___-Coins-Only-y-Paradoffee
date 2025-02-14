$(document).ready(function(){
    console.log("jQuery Funciona");
    
    $(".questions p").hide(); // Oculta todas las respuestas al inicio

    $(".questions h2").click(function () {
        // Cierra todas las respuestas menos la seleccionada
        $(".questions p").slideUp();
        $(".arrow").removeClass("rotate"); // Restaura la flecha original
        
        // Si la respuesta ya está visible, no la vuelvas a abrir
        if (!$(this).next("p").is(":visible")) {
            $(this).next("p").slideDown(); // Muestra la respuesta
            $(this).find(".arrow").addClass("rotate"); // Rota la flecha
        }
    });

    let index = 0; // Índice de la imagen actual
    const images = $(".carousel-track img"); // Todas las imágenes
    const totalImages = images.length; // Cantidad de imágenes

    function updateCarousel() {
        const offset = -index * 100 + "%"; // Calcula el desplazamiento
        $(".carousel-track").css("transform", "translateX(" + offset + ")");
    }

    $(".next").click(function () {
        index = (index + 1) % totalImages; // Ir a la siguiente imagen (loop infinito)
        updateCarousel();
    });

    $(".prev").click(function () {
        index = (index - 1 + totalImages) % totalImages; // Ir a la imagen anterior (loop infinito)
        updateCarousel();
    });


})



//MÚSICA

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('miAudio');
    function reproducirAudio() {
        audio.play().then(() => {
            console.log('Audio reproduciéndose automáticamente.');
        }).catch((error) => {
            console.log('Autoplay bloqueado. Requiere interacción del usuario.');
        });
    }
    reproducirAudio();
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            reproducirAudio();
        }
    });
});

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

let selectedCharacter = localStorage.getItem("selectedCharacter");

selectedCharacter = selectedCharacter ? parseInt(selectedCharacter) : 0;

console.log("Personaje seleccionado al cargar:", selectedCharacter);

// MIGUEL ESTO LO TIENES QUE PONER EN EL BOTÓN CUANDO QUIERAS QUE SE GUARDE EL DATO
localStorage.setItem("selectedCharacter", selectedCharacter);

const characterNames = [
    "Huesito",
    "Lepion",
    "Pijus",
    "Rústica",
    "Zananejo"
];

updateCharacter(selectedCharacter);

function updateCharacter(characterIndex) {
    $(".characterMenu").hide();
    $("#charactermenu-" + characterIndex).show();
    $("#text-box").text(characterNames[characterIndex - 1]);
    
}





