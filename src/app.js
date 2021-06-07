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

//gets an array of cards.
//Need to place the cardas one on side of another. with clasees.

let cardArray = [];
const cardGenerator = () => {
  let cardContainer = document.querySelector(".card-container");
  let inputValue = document.querySelector("#numberOfCards").value; // Creamos esto para obtener el valor del input.
  let cardText = document.querySelector("#text");
  for (let i = 0; i < inputValue; i++) {
    let num = randomNumber();
    let type = randomType();
    cardText.createElement.add("H1");
    let div = document.createElement("DIV");
    div.classList.add("card", "justify-content-between", type);

    cardContainer.appendChild(div);
    cardArray.push({ numero: num, tipo: type });
  }

  console.log(cardArray);
};

//Hacer un recorrido al cardArray y con el mismo metodo para mostar las cartas mostrar ya obtenidas. pero sin el random si no desde el array.

const sortedArray = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  for (let i = 0; i < cardArray.length - 1; i++) {
    let aux = cardArray[i + 1];
    aux++;
  }

  return arr;
};

let drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", cardGenerator);
let sortButton = document.querySelector("#sort");
sortButton.addEventListener("click", function() {
  sortedArray(cardArray);
  console.log(cardArray);
});
