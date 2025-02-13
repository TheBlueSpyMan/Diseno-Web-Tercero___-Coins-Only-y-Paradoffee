$(document).ready(function(){
    console.log("jQuery Funciona");
    
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

const clickSound = new Audio('./Media/Sonidos/ClickBoton.mp3');

function playClickSound() {
    clickSound.currentTime = 0; 
    clickSound.play(); 
}


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





/* CAMBIAR PAGINA A CARTAS */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("select-payment");
    
    if (button) {
        button.addEventListener("click", function () {
            playClickSound();
            setTimeout(() => {
                window.location.href = "cartas.html";
            }, 300);     
        });
    } else {
        console.error("El botón con ID 'select-payment' no se encontró.");
    }
});


/* CAMBIAR PAGINA A PERSONAJES */
$("#select-client").on("click", function() {
   playClickSound();
   selectedCharacter = (selectedCharacter % 5) + 1; 
   updateCharacter(selectedCharacter);
    /* setTimeout(() => {
        window.location.href = "characters.html"; 
    }, 300); */
});





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
            }, 1500);
        }
    });
});

//EFECTOS BOTONES MENÚ

const selectClientButton = document.getElementById('select-client');
const selectPaymentButton = document.getElementById('select-payment');
const buttonPlay = document.getElementById('button-play');


function addHoverEffect(button) {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'grey'; 
        button.style.cursor = 'pointer'; 
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = ''; 
    });
}

addHoverEffect(selectClientButton);
addHoverEffect(selectPaymentButton);

function updateButtonPlayState() {
    if (selectedCharacter !== 0) {
        addHoverEffect(buttonPlay);
    } else {
        buttonPlay.removeEventListener('mouseover', () => {});
        buttonPlay.removeEventListener('mouseout', () => {});
    }
}


function updatePlayButton() {
    const playButton = $("#button-play");

    if (selectedCharacter === 0) {
        playButton.css({
            "cursor": "not-allowed",
            "opacity": "0.5"
        }).off("click"); 
    } else {
        playButton.css({
            "cursor": "pointer",
            "opacity": "1",
            "font-family": "'Chewy', serif",  
            "color": " #e8f8d8"
        }).text("ADELANTE GRANUJA")  
        .off("click")
        .on("click", function() {
            playClickSound();
            setTimeout(() => {
                window.location.href = "juego.html"; 
            }, 300);       
        });
        updateButtonPlayState();
    }
}


// VOCES PERSONAJE

const soundsCharacter = {
    'charactermenu-1': new Audio('./Media/Sonidos/Voz1.mp3'),
    'charactermenu-2': new Audio('./Media/Sonidos/Voz2.mp3'),
    'charactermenu-3': new Audio('./Media/Sonidos/Voz3.mp3'),
    'charactermenu-4': new Audio('./Media/Sonidos/Voz4.mp3'),
    'charactermenu-5': new Audio('./Media/Sonidos/Voz5.mp3')
};

document.querySelectorAll('.characterMenu').forEach((character) => {
    character.addEventListener('click', () => {
        const soundCharacter = soundsCharacter[character.id]; 
        if (soundCharacter) {
            soundCharacter.currentTime = 0; 
            soundCharacter.play(); 
        }
    });
});





updatePlayButton();