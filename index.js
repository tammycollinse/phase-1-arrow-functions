// function foo(){
//     return "bar";
// }

// // could also be written as

// const foo = function(){
//     return "bar"; //writing it as an anonymous function by assigning it to a variable name
// } // this is also known as a function expression

// const add = (parameter1, parameter2) => parameter1 + parameter2;
// add(2,3); //this will return 5; declaring the function as a function expression

//if we look to the right of the initial assignment operator
//in the parentheses, we have the list of parameters... and further right would 
//be the equavalent of the function body

//WHEN ARE THESE ARROW FUNCTIONS USED//

//--These are used with the Js iterator methods, dealing with a set of data at the same time

//example:

const divide = function(num1, num2){
//console.log(result);
divide(2000, 100);
} 


const square = x => x*x;
square(2);

const add = (number1 , number2) => number1 + number2;
add(3,4);