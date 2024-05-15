let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE

// output: hello world we strong!

// let output = text.replace(/\[[^\]]+\]/g, '');
// console.log(output);

// let regex = /\[[^\]]+\]/g;
// let matches = text.match(regex);

// if (matches) {
//   matches.forEach(match => {
//     text = text.replace(match, '');
//   });
// }

// let output = text;
// console.log(output);


let output = '';
let withinBrackets = false;

for (let i = 0; i < text.length; i++) {
  if (text[i] === '[') {
    withinBrackets = true;
  } else if (text[i] === ']') {
    withinBrackets = false;
  } else if (!withinBrackets) {
    output += text[i];
  }
}

console.log(output);