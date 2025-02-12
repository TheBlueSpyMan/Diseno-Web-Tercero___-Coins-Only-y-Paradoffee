document.addEventListener("DOMContentLoaded", () => {
  const minijefe = document.getElementById("minijefe");
  const traductorContainer = document.getElementById("traductorContainer");
  const text = document.getElementById("text");

  setTimeout(() => {
    minijefe.classList.add("visible");
    setTimeout(() => {
      traductorContainer.classList.add("visible");
      setTimeout(() => {
        text.style.display = "block";
      }, 2000);
    }, 1000);
  }, 5000);

  traductorContainer.addEventListener("click", () => {
    text.style.display = "none";
    setTimeout(() => {
      traductorContainer.classList.remove("visible");
      traductorContainer.classList.add("exit");
      setTimeout(() => {
        minijefe.classList.remove("visible");
        minijefe.classList.add("exit");
      }, 2000);
    }, 2000);
  });


        let star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);
    
        let rectangle = document.createElement("div");
        rectangle.classList.add("rectangle");
        document.body.appendChild(rectangle);

  });
