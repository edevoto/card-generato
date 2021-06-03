/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./random.js";

let addCarts = () => {
  document.querySelector(".card").classList.add(randomType());
  document.querySelector(".card").innerHTML = randomNumber();

  //Con el boton de draw y el text input generar la cantidad de cartas que es ingresada.
  //Con el boton sort mostrar las cartas en orden, usando el algoritmo bubble.
  //Guardar los cambios(tirada de cartas) en un array.
  //mostrar por console.log las 'manos' que se imprimieron.
};
