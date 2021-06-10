/* eslint-disable */
import "bootstrap";
import "./style.css";

let randomNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let numI = Math.floor(Math.random() * numbers.length);

  return numbers[numI];
};

let randomType = () => {
  let type = ["diamond", "spades", "heart", "clover"];
  let typeI = Math.floor(Math.random() * type.length);
  return type[typeI];
};

const changeValue = num => {
  switch (num) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return num;
  }
};
//gets an array of cards.
//Need to place the cardas one on side of another. with clasees.

let cardArray = [];
let cardContainer = document.querySelector(".card-container");
const cardGenerator = () => {
  cardArray = [];
  cardContainer.innerHTML = "";

  let inputValue = document.querySelector("#numberOfCards").value; // Creamos esto para obtener el valor del input.

  for (let i = 0; i < inputValue; i++) {
    let type = randomType();
    let div = document.createElement("DIV");
    div.classList.add(type);
    let text = document.createElement("H1");
    let num = randomNumber();
    text.textContent = changeValue(num);
    div.appendChild(text);
    cardArray.push({
      numero: num,
      tipo: div.className
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
      let newCardContainer = document.createElement("DIV");
      //let card = document.querySelector(".card");
      newCardContainer.classList.add("row", "card-container");
      cardArray.forEach(card => {
        const pinta = card.tipo;
        const valor = card.numero;

        let newDiv = document.createElement("DIV");
        newDiv.classList.add(
          "card",
          "justify-content-between",
          "text-center",
          pinta
        );

        console.log(newDiv);
        newCardContainer.appendChild(newDiv);
        let text = document.createElement("H1");
        text.textContent = changeValue(valor);
        newDiv.appendChild(text);

        if (newDiv.className.value === "diamond") {
          text.classList.add("display-2", "m-auto", "text-danger");
        } else if (newDiv.className.value === "heart") {
          text.classList.add("display-2", "m-auto", "text-danger");
        } else {
          text.classList.add("display-2", "m-auto", "text-black");
        }
        document.body.appendChild(newCardContainer);
      });
    }
    wall--; //decrease the wall for optimization
  }

  return arr;
};

let drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", cardGenerator);

let sortButton = document.querySelector("#sort");

sortButton.addEventListener("click", function() {
  sortedArray(cardArray);
});
