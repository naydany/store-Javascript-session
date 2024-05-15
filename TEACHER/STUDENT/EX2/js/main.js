// let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// // TODO: 
// // YOUR CODE HERE

// // output: 14 becuase 3 + 5 + 1 + 2 + 3





let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
let total = 0;

for (let index in numbers) {
    if (index === '1' || index === '2' || index === '6' || index === '8' || index === '9') {
        total += numbers[index];
    }
}

console.log(total);