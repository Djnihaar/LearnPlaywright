

//non primitive Datatypes
 
//arrayname = [] // empty - without elements

//arr = [3,4,5,6,7,8,9,89]  //Homogenious

//arr2 = ["Raju", 32, "blr", true, {firstname : "Raju", lastname: "G"},undefined,null] // Hetirogenious

//Index of Element always starts with 0
//console.log(arr2[0])

//.length

//count of how many elements are Present in a array

//console.log(arr.length)

//concat

//str = "playwright"
//str2 = "javascript"

//finalstr = str+str2
//console.log(finalstr)

//concat

//finalarr = arr.concat(arr2)

//console.log(finalarr)

//sort()
 //arr3 = [9,3,7,4,5,8]
 //arr4 = arr3.sort()

//console.log(arr4)

//arr5 = ["avinas","vidya","bindu","kalyani",3,true]
//arr6 = arr5.sort()
//console.log(arr6)

//reverse()

// reverse the array elements
//arr7 = [3,9,"avinas","vidya","bindu","kalyani",true]
//arr7 = arr6.reverse()
//console.log(arr7)
//arr = [2,4,8,5,9].sort().reverse()
//console.log(arr)

//split()
 
//converts the strings to array 

// str = "playwright"
// arr8 = str.split("")
//console.log(arr8)

// str = "this is a java class".split("a")

// console.log(str)

// arr3 = "playwright".split("").sort().reverse()
// console.log(arr3)

//join

//to convert Array to string

arr = ["vidya","chethana","supriya"]
//console.log(arr)

//push
//push will add the element to array at the end

//unshift 
//unshift will add element to array at the begining

arr.push("krish")
arr.unshift("Radha","Raja")
//console.log(arr)

//pop
//shift

arr.pop() //it will last element
arr.pop()
arr.pop()

arr.shift()
console.log(arr)

//includes
//will check element is present in array or not and return true or false
ar1 = [ 'Radha', 'Raja', 'vidya', 'chethana', 'supriya' ]

ar1.includes("Raju") // false
ar1.includes("vidya") // True

ar1.includes("Radha") //True

console.log(ar1.includes("Radha"))

ar1[3] = "Bindu"
console.log(ar1)

// slice

//splice()

//filter

arr = [1,2,3,4,5,6,7,8,9,10,11,12]

arr = ["Raju","Arun","Chethana","Ramya","Arjun","sitara"]  //Ra

//map

arr = [1,2,4]  // multiply by 2 [2,4,8]

arr = ["Playwright", "cypress", "WDIO"]  // ["Playwright Automation", "cypress  Automation", "WDIO  Automation"]

//reduce

arr = [1,2,3,4,5,8]  // result = 19

// add all the elements

//Call backs 
