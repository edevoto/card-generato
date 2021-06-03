/* eslint-disable */
import "bootstrap";
import "./style.css";

let addCarts = () => {
  document.querySelector(".card").classList.add(randomType());
  document.querySelector(".card").innerHTML = randomNumber();


//Con el boton de draw y el text input generar la cantidad de cartas que es ingresada.
//Con el boton sort mostrar las cartas en orden, usando el algoritmo bubble.
//Guardar los cambios(tirada de cartas) en un array.
//mostrar por console.log las 'manos' que se imprimieron.





};









let randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let numI = Math.floor(Math.random() * numbers.length);

  return numbers[numI];
};

let randomType = () => {
  let type = ["diamond", "spades", "heart", "clover"];
  let typeI = Math.floor(Math.random() * type.length);

  return type[typeI];
};
