$(document).ready(function(){
    console.log("jQuery Funciona");
    
    $(".questions p").hide(); 

    $(".questions h2").click(function () {
        $(".questions p").slideUp();
        $(".arrow").removeClass("rotate"); 
        
        if (!$(this).next("p").is(":visible")) {
            $(this).next("p").slideDown(); 
            $(this).find(".arrow").addClass("rotate"); 
        }
    });

    let index = 0; 
    const images = $(".carousel-track img");
    const totalImages = images.length; 

    function updateCarousel() {
        const offset = -index * 100 + "%"; 
        $(".carousel-track").css("transform", "translateX(" + offset + ")");
    }

    $(".next").click(function () {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    $(".prev").click(function () {
        index = (index - 1 + totalImages) % totalImages;
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





