var reviews__items=document.querySelector(".reviews__items"),reviews__point=document.querySelectorAll(".reviews__point");reviews__point.forEach((function(e,i){reviews__point[i].addEventListener("click",(function(){var e=-16.66*i;reviews__items.style.transform="translateX(".concat(e,"%)"),reviews__point.forEach((function(e,i){reviews__point[i].classList.remove("active")})),reviews__point[i].classList.add("active")}))}));
//# sourceMappingURL=index.539f1d19.js.map