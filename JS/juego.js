document.addEventListener("DOMContentLoaded", () => {

  const characterNamesPNG = [
    "huesitos",
    "leemur",
    "piojosa",
    "maricarmen",
    "rabanejo"
  ];

  const sounds = [
    new Audio('./Media/Sonidos/explosion.mp3'),
    new Audio('./Media/Sonidos/pop.mp3'),
    new Audio('./Media/Sonidos/fall.mp3')
  ];

  function playExplosionSound() {
    clickSound.currentTime = 0; 
    clickSound.play();
  }

  function playPopSound() {
    clickSound.currentTime = 0; 
    clickSound.play();
  }

  let clickCount = 0; 

  setTimeout(() => {
    runSequence(1);
  }, 4000);

  function runSequence(seq) {
    const character = document.getElementById("character");
    const traductorContainer = document.getElementById("traductorContainer");
    const text = document.getElementById("text");
    const jumpscare = document.getElementById("jumpscare"); 
    const explosion = document.getElementById("explosion"); 

    character.className = "";
    traductorContainer.className = "";
    text.style.display = "none";

    if (seq === 1) {
      text.innerText = "Muy buenas humano inútil, como definitivamente NO ES tu primera vez y DEFINITIVAMENTE te he explicado el juego ya que este es el juego. Me largo para dejarte que juegues tranquilamente... Chaito";
      character.src = "Media/Characters/Minijefe.png";
    } else if (seq === 2) {
      text.innerText = "Hola, sé que viniste a jugar el juego, no? Vengo desde las profundidades de tu selección de clientes para darte un consejo para hacer eso...";
      character.src = "Media/Resources/Img/Characters/" + characterNamesPNG[selectedCharacter-1] + ".png";
    }

    setTimeout(() => {
      character.classList.add("visible");
    }, 1000);

    setTimeout(() => {
      traductorContainer.classList.add("visible");
    }, 1000);

    setTimeout(() => {
      text.style.display = "block";
    }, 200);

    traductorContainer.addEventListener("click", function handler() {
      clickCount++; 
      text.style.display = "none";

      setTimeout(() => {
        traductorContainer.classList.remove("visible");
        traductorContainer.classList.add("exit-down");
      }, 2000);

      setTimeout(() => {
        if (seq === 1) {
          sounds[2].play();
          character.classList.add("exit-down");
        } else if (seq === 2) {
          character.classList.add("exit-down");
        }
      }, 4000);

      if (seq === 1) {
        setTimeout(() => {
          character.classList.add("exit-down");
          runSequence(2);
        }, 8000);
      }

      if (clickCount === 1) {
        setTimeout(() => {
          sounds[0].play();
          explosion.style.display = "block";
          setTimeout(() => {
            explosion.style.animation = "fadeOut 1s forwards";
          }, 1000);
        }, 8000);
      }

      if (clickCount === 2) {
        setTimeout(() => {
          sounds[1].play();
          jumpscare.style.display = "block";
          jumpscare.classList.add("grow-shrink-animation"); 
          jumpscare.addEventListener('click', function () {
            window.location.href = 'menu.html';
          });
        }, 2000);
      }

      traductorContainer.removeEventListener("click", handler);
    }, { once: true });
  }

  let star = document.createElement("div");
  star.classList.add("star");
  document.body.appendChild(star);

  let rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");
  document.body.appendChild(rectangle);

});