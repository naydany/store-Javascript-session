// let x = 5
// let y = 5
// console.log(x == y)

// let x = 5
// let y = 5
// console.log(!(x == y && ( x>5 || y<10) ))

// ----#// in other convert string to int we use parseInt
// let n = "5"
// console.log(parseInt(n) + parseInt(n))

// let n = 5
// console.log(String(n)+String(n))


// let total;
// function sum(n1, n2){
//     total = n1 + n2
//     return total
// }

// console.log(sum(100, 200));

// --------#find an array in function
// function sumArray(array) {
//     let total = 0;
//     for (let value of array){
//         total +=value;
//     }
//     return total;
// }
// let arr = [100, 200];

// console.log(sumArray(arr));


function randomColor() {
    let colors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let result = "#"
    for (let i = 0; i< 6; i++) {
        let indix = Math.floor(Math.random() * 15);
        result += colors[indix]; 
    }
    return result
}
function changeColor() {
    let color = randomColor();
    document.querySelector("h1").textContent = color;
    document.body.style.backgroundColor = color;
}
setInterval(changeColor, 1000);


// let array = [];
// console.log(array); // Output: []

// let fruits = ['apple', 'banana'];
// console.log(fruits); // Output: ['apple', 'banana']


// let array = [12, 13, 15, 16];
// console.log(array)

// ---#access using index
// let array = [10, 20, 30, 40];
// let value = array[2];
// console.log(value);

// insert arr
// let array = [10, 30, 40];
// array.splice(1, 0, 20);
// console.log(array);


// #at array to end
// let array = [10, 30, 40];
// array.push(20);
// console.log(array);


// let array = [10, 30, 40];
// let removedElement = array.splice(2, 1);
// console.log(array); // Output: [10, 30]
// console.log(removedElement); // Output: [40]



// let array = [
//     {"name":"dany"},
//     {"name":"hello"},
// ]
// array.splice(0,1)
// console.log(array)


// let text= "hellodany";

// console.log(text.slice(0,2));



// let num=0;
// for (let i=0; i<7; i++){
//     num+=i;
// }
// console.log(num)

// let arr=[1,2,3,4];
// for (index in arr){
//     console.log(arr[index])
// }