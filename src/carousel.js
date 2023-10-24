const reviews__items = document.querySelector(".reviews__items");
const reviews__point = document.querySelectorAll(".reviews__point");

reviews__point.forEach((eachPoint, i) => {
  //se asigna click a cada punto
  reviews__point[i].addEventListener("click", () => {
    //guardar posicion
    let position = i;
    //calculo de desplazamiento
    let operation = position * -16.66;
    reviews__items.style.transform = `translateX(${operation}%)`;
    reviews__point.forEach((eachPoint, i) => {
      reviews__point[i].classList.remove("active");
    });
    reviews__point[i].classList.add("active");
  });
});
