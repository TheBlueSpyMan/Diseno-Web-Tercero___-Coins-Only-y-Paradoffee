document.addEventListener("DOMContentLoaded", () => {
  
  const characterNamesPNG = [
    "huesitos",
    "leemur",
    "piojosa",
    "maricarmen",
    "rabanejo"
];

  setTimeout(() => {
    runSequence(1);
  }, 4000);

  function runSequence(seq) {
    const character = document.getElementById("character");
    const traductorContainer = document.getElementById("traductorContainer");
    const text = document.getElementById("text");

    character.className = "";
    traductorContainer.className = "";
    text.style.display = "none";

    if (seq === 1) {
      text.innerText = "Muy buenas humano inútil, como definitivamente NO ES tu primera vez y DEFINITIVAMENTE te he explicado el juego ya que este es el juego. Me largo para dejarte que juegues tranquilamente... Chaito";
      character.src = "Media/Characters/Minijefe.png";
    } else if (seq === 2) {
      text.innerText = "Uy, hola, muy buenas hoy he venido a comprar algo, sí podría-";
      character.src = "Media/Resources/Img/Characters/" + characterNamesPNG[selectedCharacter-1] + ".png";
    }

    setTimeout(() => {
      character.classList.add("visible");
    },1000);

    setTimeout(() => {
      traductorContainer.classList.add("visible");
    }, 1000);

    setTimeout(() => {
      text.style.display = "block";
    });

    traductorContainer.addEventListener("click", function handler() {
      text.style.display = "none";
      setTimeout(() => {
        traductorContainer.classList.remove("visible");
        traductorContainer.classList.add("exit");
      }, 2000);
      setTimeout(() => {
        if (seq === 1) {
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
      
      
      traductorContainer.removeEventListener("click", handler);
    }, {once: true});
  }

        let star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);
    
        let rectangle = document.createElement("div");
        rectangle.classList.add("rectangle");
        document.body.appendChild(rectangle);

  });
