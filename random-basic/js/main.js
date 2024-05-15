
let fruits = ['banana', 'coconut', 'orange', 'jackfruit', 'mango'];

for (let i=0; i<6; i++){
let heading = document.querySelector('h1');
let index = Math.floor(Math.random() * 1);
heading.textContent = fruits[index];
}