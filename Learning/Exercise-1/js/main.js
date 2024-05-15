// Create card follow image result
const body = document.querySelector('body');
const container = document.querySelector('.container');

let div = document.createElement('div');
div.classList.add('card');
container.appendChild(div)

let img = document.createElement('img');
img.src='javascript.jpg';
div.appendChild(img)

let h1 = document.createElement('h1');
h1.textContent='JavaScript Box';
div.appendChild(h1);

let p = document.createElement('p');
p.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
div.appendChild(p)

let div1= document.createElement('div');
div1.classList.add('tag-group');
div.appendChild(div1)


let button = document.createElement('button');
button.classList.add('tag');
button.textContent='js';
div1.appendChild(button)

let button0 = document.createElement('button');
button0.classList.add('tag');
button0.textContent='javascript';
div1.appendChild(button0)

let button1 = document.createElement('button');
button1.classList.add('tag');
button1.textContent='Frontend';
div1.appendChild(button1)

let button2 = document.createElement('button');
button2.classList.add('tag');
button2.textContent='scripting';
div1.appendChild(button2)



