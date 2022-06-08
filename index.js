const button= document.querySelector(".btn")
const sidebar = document.getElementById("side-bar");
const content = document.getElementById("avatar-contain");
const motivation= document.querySelector(".motivation-contain")
const prev = document.querySelector(".previous")
const next= document.querySelector(".next")
const motiv= document.querySelector(".motivation-contain")
button.addEventListener("click", () => {
  content.classList.toggle("active")
  motivation.classList.toggle("open-bar")
  prev.classList.toggle("open")
  next.classList.toggle("close")
});

content.addEventListener("click", () => {
  content.classList.remove("active")
  motivation.classList.remove("open-bar")
  prev.classList.remove("open")
  next.classList.remove("close")
});

motiv.addEventListener("click", () => {
  content.classList.remove("active")
  motivation.classList.remove("open-bar")
  prev.classList.remove("open")
  next.classList.remove("close")
});
window.addEventListener("resize",() => {
  content.classList.remove("active")
  motivation.classList.remove("open-bar")
  prev.classList.remove("open")
  next.classList.remove("close")
});