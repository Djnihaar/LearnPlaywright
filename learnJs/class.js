
// class Calculator {

//     x = 20
//     y = "Mantu"

//     printMessage() {
//         console.log("this is a simple method")
//     }

//  add(num1,num2) {

//     console.log(num1)
//     console.log(num2)
//     console.log(num1 + num2)
// }

// substract(num1,num2) {

//     console.log(num1)
//     console.log(num2)
//     console.log(num1 - num2)
// }
// multiply(num1,num2) {

//     console.log(num1)
//     console.log(num2)
//     console.log(num1 * num2)
// }
// division(num1,num2) {

//     console.log(num1)
//     console.log(num2)
//     console.log(num1 / num2)
// }

// }

// create object of the class / Instance of the class 



// cal1.add(2,8)
// cal1.multiply(4,8)
// cal1.substract(10,2)
// cal1.division(12,3)

//const raja = new Calculator()

//cal1.add(2,5)
//cal1.multiply(4,7)

//raja.add(5,8)
//console.log(raja.y)


class Student {
    studentname = "Kumar"

    constructor(name1,name2){
        console.log("Name 1 :" + name1)
        console.log("Name 2 :" + name2)
    }

    print_student_Name(){
        console.log("Name of the student: "+this.studentname)

       
    }
     print_complete_details(){
        this.print_student_Name()
        console.log("Course name : Playwright")
        console.log("Place: Bangalore")
            
        }
        Method1(){
            console.log("This is Method 1")
            this.Method2()
        }
          Method2(){
            console.log("This is Method 2")
            this.Method1()
        }
}
const stu1 = new Student("DJ","Sambhu")
//stu1.print_complete_details()

//stu1.Method1()

// constructor is method in a class

// it automatically invoked / Executed when you create object of the class

//const stu1 = new student("Yamuna","Amulya")

//stu1.method3("Ramesh","Suresh")
