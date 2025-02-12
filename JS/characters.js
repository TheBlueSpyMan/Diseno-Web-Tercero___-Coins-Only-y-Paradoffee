/*
Funciones en el script slideShow.js

Este slideShow tendrá unos controladores (flechas) para pasar hacia delante y hacia atrás los slides.

También tendrá unos puntos para poder seleccionar y ver cada uno de los slides.

También será automático y podremos ir viendo cada slide pasado cierto tiempo.
*/

// Inicializamos el contador que vamos a usar nosotros en el código internamente
let slideIndex = 1;

// Seleccionamos las flechas de next y prev slide
let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");
let autoSlide;
let arrDots = document.querySelectorAll(".dot")


showSlide(slideIndex);

nextSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(1);
});

prevSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(-1);
});

/**
 * 
 * @param {number} index 
 * 
 * Esta función aumenta o disminuye el slideIndex dependiendo del parámetroqe le llegue desde la llamada.
 */
function nextPrevSlide(index){
    slideIndex += index;
    showSlide(slideIndex);
}

/**
 * Esta función actualiza la variable slideIndex igualando su valor al índice del punto (dot) que le llegará como parámetro
 * 
 * @param {number} dotIndex 
 */
function currentDotSlide(dotIndex){
    slideIndex = dotIndex+1;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNumber
 *  Esta función mostrará el slide correspondiente a la posición que le llegue
 *  También tendrá que calcular si nos pasamos por arriba o por abajo el índice. 
 */
function showSlide(slideNumber){
    let arrSlides = document.querySelectorAll(".mySlides")
    
    
    if (slideNumber > arrSlides.length){
        slideIndex = 1;
    }
    
    if (slideNumber < 1){
        slideIndex = arrSlides.length;
    }
    
    // Ocultamos todos los slides.
    for(i = 0; i < arrSlides.length; i++){
        arrSlides[i].style.display = "none";
    }

    // Mostramos el slide que corresponda al índice.
    arrSlides[slideIndex - 1].style.display = "block";
}

/**
 nextPrevSlide
 */