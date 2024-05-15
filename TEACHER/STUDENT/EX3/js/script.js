let arrOne = [3,2,6,8];
let arrTwo = [4,1,9,4];
let result=[];

for (let number in arrOne){
    if (arrOne[number]>arrTwo[number]){
        result.push(arrOne[number]);
    }else{
        result.push(arrTwo[number]);
    }
}

console.log(result);


