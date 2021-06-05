/* eslint-disable */
import "bootstrap";
import "./style.css";

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

//create a card when entering the page
//window.onload = () => {
// let card = document.querySelector(".card");
// card.classList.add(randomType());
// card.innerHTML = randomNumber();
////};

//gets an array of cards.
//Need to place the cardas one on side of another. with clasees.
let cardArray = [];

const cardGenerator = () => {
  let cardContainer = document.querySelector(".card-container");
  let inputValue = document.querySelector("#numberOfCards").value; // Creamos esto para obtener el valor del input.

  for (let i = 0; i < inputValue; i++) {
    cardArray.push(`<div class="card ${randomType()} col-6 col-md-2 m-5 d-block position-relative text-center">
                    <span>${randomNumber()}</span>
                    </div>`);
  }
  for (let j = 0; j < cardArray.length; j++) {
    cardContainer.innerHTML += cardArray[j];
  }
  console.log(cardArray);
  console.log(inputValue);
};

document.querySelector("#draw").addEventListener("click", cardGenerator);

//sort the array

//map the card html

//Con el boton de draw y el text input generar la cantidad de cartas que es ingresada.
//Con el boton sort mostrar las cartas en orden, usando el algoritmo bubble.
//Guardar los cambios(tirada de cartas) en un array.
//mostrar por console.log las 'manos' que se imprimieron.
