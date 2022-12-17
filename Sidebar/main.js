const toggle = document.querySelector(".toggle")
const closes = document.querySelector(".close")
const sidebar = document.querySelector(".sidebar")
toggle.addEventListener('click',function(){
  sidebar.classList.add("showSidebar");
})

closes.addEventListener('click', function(){
  sidebar.classList.remove("showSidebar");
})