/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function arrayRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
window.onload = function() {
  //write your code here
  let suits = [
    `<i class="bi bi-suit-spade-fill"></i>`,
    `<i class="fa-solid fa-heart" style="color: #ff0000;"></i>`,
    `<i class="bi bi-suit-club-fill"></i>`,
    `<i class="bi bi-suit-diamond-fill"></i>`
  ];
  let valuesCard = ["A", "K", "Q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let randomsuit = arrayRandom(suits);

  document.getElementById("suit").innerHTML = randomsuit;
  document.getElementById("suit1").innerHTML = randomsuit;
  document.getElementById("valueC").textContent = arrayRandom(valuesCard);
};

window.recarga = function recarga() {
  //location.reload();
  let suits = [
    `<i class="bi bi-suit-spade-fill"></i>`,
    `<i class="fa-solid fa-heart" style="color: #ff0000;"></i>`,
    `<i class="bi bi-suit-club-fill"></i>`,
    `<i class="bi bi-suit-diamond-fill"></i>`
  ];
  let valuesCard = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let randomsuit = arrayRandom(suits);

  document.getElementById("suit").innerHTML = randomsuit;
  document.getElementById("suit1").innerHTML = randomsuit;
  document.getElementById("valueC").textContent = arrayRandom(valuesCard);
};

//setInterval(recarga, 10000);
window.redimensionar = function redimensionar() {
  let alto = document.getElementById("alto").value;
  let ancho = document.getElementById("ancho").value;

  document.getElementById("poker").style.height = alto + "px";
  document.getElementById("poker").style.width = ancho + "px";
};
