// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let maxNum=arr[0];
let result=[];
for (let number of arr){
    if (number>getNum){
        maxNum=number;
    }
}

for (let number of arr){
    if (number<5){
        result.push(getNum);
    }else{
        result.push(number)
    }
}

console.log(result);
// output: [9, 9, 6, 7, 9]

