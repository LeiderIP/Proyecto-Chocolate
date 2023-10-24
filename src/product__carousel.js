'use strict';

const product__list = document.querySelector('.product__list')
const slider__dot = document.querySelectorAll('.slider__dot')

slider__dot.forEach( ( cadaPunto , i )=> {
  slider__dot[i].addEventListener('click', () => {
    let posicion = i
    let operacion = posicion * -6.25

    product__list.style.transform = `translateX(${ operacion }%)`

    slider__dot.forEach((cadaPunto, i) => {
      slider__dot[i].classList.remove('active')
    })
    slider__dot[i].classList.add('active')
  });
});
