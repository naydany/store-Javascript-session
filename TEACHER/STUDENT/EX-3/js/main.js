const speedX = 3;
let positionX = 0;
let time = 10;
const person = document.getElementById("person");
let isReverseX = true;
let maxWidth = window.innerWidth - 250;
let minWidth = 0

function movePerson() {
  if (isReverseX) {

    // Increase the position x 
    positionX+=speedX;

    // Set style left the constant variable person by position x 
    person.style.left = positionX + "px";

    person.classList.add("flip");
} else {
    // discrease the position x 
    positionX -= speedX;

    // Set style left the constant variable person by position x 
    person.style.left = positionX + "px";

    person.classList.remove("flip");
  }

  if (positionX > maxWidth || positionX === minWidth) {
     isReverseX = !isReverseX;
  }
}

setInterval(movePerson, time)



// const speedX = 3;
// let positionX = 0;
// let time = 10;
// const person = document.getElementById("person");
// let isReverseX = true;
// let maxWidth = window.innerWidth - 250;
// let minWidth = 0;

// function movePerson() {
//   if (isReverseX) {
//     // Increase the position x
//     positionX += speedX;

//     // Set the left style of the person element based on the position x
//     person.style.left = positionX + "px";

//     person.classList.add("flip");
//   } else {
//     // Decrease the position x
//     positionX -= speedX;

//     // Set the left style of the person element based on the position x
//     person.style.left = positionX + "px";

//     person.classList.remove("flip");
//   }

//   if (positionX > maxWidth || positionX === minWidth) {
//     // Reverse the direction if the position reaches the maximum or minimum width
//     isReverseX = !isReverseX;
//   }
// }

// setInterval(movePerson, time);