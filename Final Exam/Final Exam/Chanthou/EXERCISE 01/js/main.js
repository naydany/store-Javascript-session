document.querySelector(".card").remove();

// Create card 
const card = document.createElement('div');
card.classList.add('card');
document.body.appendChild(card)
// Create image 
const img =document.createElement('img');
img.src='image/image.jpg';
card.appendChild(img)
// Create p 
const p = document.createElement('p');
p.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat quas impedit rem labore animi itaque dignissimos earum! Rem, harum reprehenderit? A quaerat quas amet earum ipsam placeat recusandae corrupti?";
card.appendChild(p)
// Create a 
const a = document.createElement('a');
a.href='https://www.w3schools.com/';
p.appendChild(a)