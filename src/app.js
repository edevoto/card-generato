/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  let type = randomType();
  let div = document.createElement("DIV");
  div.classList.add(type);
  let text = document.createElement("H1");
  let num = randomNumber();
  text.textContent = changeValue(num);
  cardContainer.appendChild(div);
  div.appendChild(text);
  div.classList.add("card", "justify-content-between", "text-center");
  text.classList.add("text");
};

const cardContainer = document.querySelector(".card-container");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let randomNumber = () => {
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

//Hacer un recorrido al cardArray y con el mismo metodo para mostar las cartas mostrar ya obtenidas. pero sin el random si no desde el array.
