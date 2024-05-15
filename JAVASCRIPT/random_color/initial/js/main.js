const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');

const color = document.querySelector('#result-color');
console.log(color)

// return the color string code like example: #f00233
function colorCode() {
   // TODO your code here
   let result='#';
   for (let i=0; i<6;i++){
      index = Math.floor(Math.random()*15);
      result+=hex[index];
   }
   return result
  
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
    //  TODO your code here
    let colorrule = colorCode();
    color.textContent=colorrule;
    document.body.style.backgroundColor=colorrule;
    color.style.color=colorrule;
}

btn.addEventListener('click', getRandomColor);
   // TODO  your code here
   

