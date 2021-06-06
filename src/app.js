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
let newArray = [];
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
    var newArray = cardArray.map(function() {
      while (cardArray > 0) {
        while (j < cardArray) {
          //compare the adjacent positions, if the right one is bigger, we have to swap
          if (cardArray[j] > cardArray[j + 1]) {
            let aux = cardArray[j];
            cardArray[j] = cardArray[j + 1];
            cardArray[j + 1] = aux;
          }
          index++;
        }
        cardArray--; //decrease the wall for optimization
      }
      return cardArray;
    });

    newArray.concat(cardArray).push(newArray);
    localStorage.setItem("first card array", newArray.value);
    console.log(newArray);
  }
  
};

let sortedArray = newArray.sort(arr => {
  let wall = newArray.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }

  return arr;
});

let drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", cardGenerator);
let sortButton = document.querySelector("#sort");
sortButton.addEventListener("click", sortedArray);


