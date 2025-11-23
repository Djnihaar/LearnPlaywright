const { queryObjects } = require("v8")

var x = 10 // number
var y = "Hari" // string

x = 20
x = "Tilu"

//JS is a dynamically typed Language

var x = 'Raju'
//console.log(typeof(x))

//2 Types of Datatypes

//1. Primitive Datatypes 


//1. number
x = 20  // number
x = 23.5 // number

//2. string

x = "jhjhj"
x = 'jkhnbh'
//3. boolean
x = true
x = false

//console.log(typeof(x))
//4. undefined
var x = undefined
console.log(typeof(x))

// variable declared but not assigned any value
//5. Null
x = null

console.log (typeof(x)) // it should be null but in JS it will give object 
// initially JS comapred with c language 

//variable is declared assigned with empty value

// var let const -- difference
// what is the return type of null // object 
// what is the difference between undefined and null


//Non Primitive Datatypes

//arrays
//Objects
//Regular Expressions

//Arrays
 var x = [10,20,30,40]
 var arr = ["Nihar","Niharika","Raju"]

 arr[0] // Nihar
 //console.log(arr[0])
 //console.log(arr[2])
 x = [10,"Nihar",true,23.5]

 arr = [2,3,25,4,9,15] // homogenous array

 //Data driven testing - Execute the same test with multiple sets of data

// 4 sets of Data

 //arr = [

   // set1,
    //set2,
    //set3,
    //set4
 //]
 {

 }

 //objetname = {
  //  propertyname : propertyvalue,
 //}

 car = {
    model : 2025,
    maker : "KIA",
    color : "Red",
    price : 2000000,
    automatic : true,
    place: "Bangalore",
    carnumber : "KA01AB1234"

 }

 console.log(car.maker) // "KIA"
 car.place

