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