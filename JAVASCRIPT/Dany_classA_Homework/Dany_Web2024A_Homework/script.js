// ============loops=========

1// for (let i = 0; i < 3; i++) {
//     console.log('Hello'+i);
// }


2// for (var n = 2, max= 5; n < max; n += 1) {
//     console.log(n);
// }

3// numbers= [3,5,7,9]
// for (let number of numbers) {
//     console.log(number)
// }

4// let x= prompt("Enter your number:")
// while (x !== 5) {
//   console.log("Try again");
//   x= prompt("Enter your number:")
// }

// ============condition===============

// var result, x, y;
// x = 0;
// y = 0;
// if (x < 5 && y > 6) {
//   console.log(result) = "monday";
// } else {
//   if (x > 10) {
//     console.log(result) = "friday";
//   } else {
//     console.log(result) = "sunday";
//   }
// }
// console.log(result);


// let x = 5;
// let y = 0;

// let result;

// if (x <= 5 || y > 6) {
//   result = "monday";
// } else if (x > 10) {
//   result = "friday";
// } else {
//   result = "sunday";
// }
// console.log(result)
//  

// let name = prompt("Please enter your name:");
// let discripe = prompt("Enter you message:")
// console.log("Hello, " + name +" "+ discripe + "!");


// =========OUTPUT========
// console.log("Ronan is the best");
  // #alert
// let isconfirm = window.confirm("Please do something")


// =========NUMBER OPERATORS=============
1// var x;
// x = 10;
// x += 1;
// console.log(x);

2// console.log(10 % 3);


// var n1, n2;
// n1 = 4;
// n2 = Math.pow(n1, 2);
// console.log(n2);

// ==============STRING OPERATORS==========

1// console.log('ronan' + 'hello')

// console.log("ronan".slice(0, -2));

// console.log("ronan".slice(1));

4// console.log("hi\nho");

5// console.log("ronan".length);

// console.log("abcd"[1]);

7// console.log(Number.parseInt("4") + Number.parseInt("5"));


8// console.log("123".isNumeric());

9// console.log("hello".toUpperCase());

10// console.log("HELLO".toLowerCase());



// document.write("hello");

// let text = "hello[pnc]best";
// let count=True;
// let result="";
// for (let i=0; i<text.length; i++){
// 	if (text[i]==="["){
// 		count=False;
// 	}else if (text[i]==="]"){
// 		count=True;
// 	}else if(count){
// 		result+=text[i];
// 	}
// }
// console.log(result);
	



// let output = '';
// let withinBrackets = false;

// for (let i = 0; i < text.length; i++) {
//   if (text[i] === '[') {
//     withinBrackets = true;
//   } else if (text[i] === ']') {
//     withinBrackets = false;
//   } else if (!withinBrackets) {
//     output += text[i];
//   }
// }

// console.log(output);