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

window.onload = () => {
  let card = document.querySelector(".card");
  card.classList.add(randomType());
  card.innerHTML = randomNumber();
};
let cardArray = [];

const cardGenerator = () => {
  let cardContainer = document.querySelector(".card-container");
  let inputValue = document.querySelector("#numberOfCards").value;
  // let cardCode = `<div class="card ${randomType()} row text-center">
  //               <span>${randomNumber()}</span>
  //               </div>`;
  for (let i = 0; i < inputValue; i++) {
    cardArray.push(`<div class="card ${randomType()} col-4 m-5 text-center">
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

//map the card html

// = createElement("div");

// newCard.classList.add(randomType());
// newCard.innerHTML = randomNumber();

//Con el boton de draw y el text input generar la cantidad de cartas que es ingresada.
//Con el boton sort mostrar las cartas en orden, usando el algoritmo bubble.
//Guardar los cambios(tirada de cartas) en un array.
//mostrar por console.log las 'manos' que se imprimieron.
