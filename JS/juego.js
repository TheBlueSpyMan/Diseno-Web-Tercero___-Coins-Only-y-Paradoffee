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
  }, 5000);

  function runSequence(seq) {
    const character = document.getElementById("character");
    const traductorContainer = document.getElementById("traductorContainer");
    const text = document.getElementById("text");

    character.className = "";
    traductorContainer.className = "";
    text.style.display = "none";

    if (seq === 1) {
      text.innerText = "El texto funciona";
      character.src = "Media/Characters/Minijefe.png";
    } else if (seq === 2) {
      text.innerText = "JODER QUE SI FUNCIONA";
      character.src = "Media/Resources/Img/Characters/" + characterNamesPNG[selectedCharacter-1] + ".png";
    }

    setTimeout(() => {
      character.classList.add("visible");
    }, 0);

    setTimeout(() => {
      traductorContainer.classList.add("visible");
    }, 1000);

    setTimeout(() => {
      text.style.display = "block";
    }, 3000);

    traductorContainer.addEventListener("click", function handler() {
      text.style.display = "none";
      setTimeout(() => {
        traductorContainer.classList.remove("visible");
        traductorContainer.classList.add("exit");
      }, 2000);
      setTimeout(() => {
        if (seq === 1) {
          character.classList.add("exit-up");
        } else if (seq === 2) {
          character.classList.add("exit-down");
        }
      }, 4000);
      if (seq === 1) {
        setTimeout(() => {
          runSequence(2);
        }, 4000);
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
