const clickSound = new Audio('./Media/Sonidos/ClickBoton.mp3');

function playClickSound() {
    clickSound.currentTime = 0; 
    clickSound.play(); 
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
        console.error("El botón con ID 'select-payment' no se encontró");
    }
});


/* CAMBIAR PAGINA A PERSONAJES */
$("#select-client").on("click", function() {
   playClickSound();
    setTimeout(() => {
        window.location.href = "characters.html"; 
    }, 300); 
});

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

updatePlayButton();
