

//Object non primitive

//var x = 10
//var y = "Raju"

//var a = true
//var b = undefined
//var c 

//var z = null

//values = {
  //  x : 10,
   // y : "Raju",
   // a : true

//}

//key : value
//objectname = {
  //  propertyname : propertyvalue,

//}

// creds = {
//     username : "admin",
//     password : "admin123",

    
// }

// console.log(creds.username) //admin
// console.log(creds.password) //admin123

// console.log(creds['username'])

//console.log(creds.wrongpassword)

const student = {
    firstname : "Ravi",
    lastname : "Kumar",
    age : 25,
    place: "Bangalore",
    courses : {
        course1 :  {
                    key1:"JavaScript"},
        course2 : "Playwright",
        course3 : "BDD Cucumber",
        course4 : "Git and GitHub - VC",
        course5 : "CICD - GitHub Actions"
    }
}

student.firstname  // Ravi

student['firstname'] // Ravi

//console.log(student.courses.course1.key1) // JavaScript

// if blocked scope thn let or const

student['place'] = "Chennai" // update or edit the value

//console.log(student.place) // Chennai

student['gender'] = "Male" // adding the property
//console.log(student.gender)

delete student.courses  // delete the property
//console.log(student.courses)

const menuItems = {

  menu1 : "Admin",
  menu2 : "PIM",
  menu3 : "Leave",
  menu4 : "Time",
  menu5 : "Recruitment",
  menu6 : "My Info",
  menu7 : "Performance"
  
}

for (let item in menuItems){
    console.log("Loops Starts")  //menu1, menu2
    console.log(menuItems[item])  // key
    console.log("Loops Ends")
}