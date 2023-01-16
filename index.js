const button = document.querySelector("nav button");
const nav = document.querySelector("nav");
const cambioColore = function () {
  let offset = window.pageYOffset;

  if (offset > 300) {
    nav.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    nav.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
};
window.addEventListener("scroll", cambioColore);

const M = document.querySelectorAll(`svg g[stroke-linecap="butt" ]`);

let numero = 0;

const intervallo = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * M.length);
  const randomM = M[randomNumber];
  randomM.style.transation = "1.5 s";
  if (randomM.getAttribute("opacity") == 1) {
    randomM.setAttribute("opacity", "0");
  } else {
    randomM.setAttribute("opacity", "1");
  }
}, 40);

intervallo();
stop();
