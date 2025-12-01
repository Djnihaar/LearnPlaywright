// synchronous - means 

//import { promises } from "dns"

// Execute the statements one by one (one after another)

 //line by line sequentially then synchronous

// console.log("Raju")

// console.log("Bindu")

// console.log("Vidya")

//javascript is  synchronous

// callback functions

// function printnamenihar(){
//     console.log("Nihar")
// }

// function printnameRanjan(z){
//     console.log("Ranjan")
//     console.log(z)
// }
// function printnameRaju(){
//     console.log("Raju")
// }

// function prientStatements(x , y, callback){
//     console.log("This is Main function")
//     console.log(x)
//     console.log(y)

//     let stuname = "Krish"
//     //printnameRaju()
//     callback("krish")
// }
//prientStatements(7,9,printnameRanjan)
// prientStatements(7,9,printnameRanjan)

//Higher Order Function - A function which accepts another function as parameter

// Ex :- prientStatements

// Call Back function - A function which we are passing as a parameter to Higher order Function

// Call Back function

//Anonimous function 

//function without Name is a Anonimous function 

// function add() {

//     console.log(4+6)
// }

// () => console.log(5+7)

//setTimeout(function ,3000)
//()=> console.log("Bindu")

//  console.log("Raju")
 
//  setTimeout( ()=> console.log("Bindu"), 4000)
//  console.log("Vidya")
//  console.log("Krish")

 // Interview Ques

 //JS synchrounous or asynchrounous
 // what is higher order function
 // callback function 
 // anonimous function
 // closer function

//  function add(num1, num2){
//     console.log(num1+num2)
//  }
 
//  function substruct(num1, num2){
//     console.log(num1-num2)
//  }
//  function calculator(callback){
//     x = 40
//     y = 45
//     callback(x,y)

//  }
//  calculator(substruct)

 // if any callback consuming data from higher order function than it is called closure function

//  JS - Synchronous Language
//  to make it Asnchronous we need use callbacks and promises

// console.log("Raju")
// setTimeout(() => console.log("Bindya"), 2000)
// console.log("Vidya")

// function add(value1, value2) {
//     console.log(value1)
//     console.log(value2)
//     console.log(value1+value2)


// }
// function substarct(value1, value2) {
//     console.log(value1)
//     console.log(value2)
//     console.log(value1-value2)


// }

// function calculator(num1, num2 , callback){
//     x = num1
//     y = num2
//     callback(x,y)
// }

// calculator(30,56, substarct)
// printMsg = () => console.log("Ranjan")
// setTimeout(printMsg, 2000)

// function1( function2(function3(function4 (function5)))) // callback hell

// regular Expression

x = "348ghljlgsddshuinbvgfgcgcg4545hjhjnbmmhmh"

y = "56565java555655script6666"

word = y.replace("6"," ")

console.log(word)

