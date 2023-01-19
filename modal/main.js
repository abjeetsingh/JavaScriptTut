const openbut = document.querySelector(".open");
const closebut = document.querySelector(".times");
const overlay  = document.querySelector(".overlay");
openbut.addEventListener('click', function(){
  overlay.classList.add("show");
})
closebut.addEventListener('click', function(){
  overlay.classList.remove("show");
})