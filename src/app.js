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
let cardContainer = document.querySelector(".card-container");
const cardGenerator = () => {
  let inputValue = document.querySelector("#numberOfCards").value; // Creamos esto para obtener el valor del input.

  for (let i = 0; i < inputValue; i++) {
    let type = randomType();
    let div = document.createElement("DIV");
    div.classList.add(type);
    let text = document.createElement("H1");
    text.textContent = randomNumber();
    div.appendChild(text);
    cardArray.push({
      numero: div.className,
      tipo: text.textContent
    });
    div.classList.add("card", "justify-content-between", "text-center");
    cardContainer.appendChild(div);

    if (div.className.value === "diamond") {
      text.classList.add("display-2", "m-auto", "text-danger");
    } else if (div.className.value === "heart") {
      text.classList.add("display-2", "m-auto", "text-danger");
    } else {
      text.classList.add("display-2", "m-auto", "text-black");
    }
  }
};

//Hacer un recorrido al cardArray y con el mismo metodo para mostar las cartas mostrar ya obtenidas. pero sin el random si no desde el array.

const sortedArray = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = cardArray[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }

  let newCardContainer = document.createElement("DIV");
  let card = document.querySelector(".card");
  cardArray.forEach(card => {
    //const pinta =
    const valor = cardArray.tipo;

    document.createElement("DIV");
    let newDiv = document.querySelector(".card");
    newDiv.classList.add(
      "card",
      "justify-content-between",
      "text-center",
      card.numero
    );
    console.log(newDiv);
    let text = document.createElement("H1");
    text.textContent = valor;
    newCardContainer.appendChild(newDiv);
    console.log(card);
  });
  card.parentNode.remove(card);
  return newCardContainer;
};

let drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", cardGenerator);

let sortButton = document.querySelector("#sort");

sortButton.addEventListener("click", function() {
  sortedArray(cardArray);
});
