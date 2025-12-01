// class Student {
//     studentdetails(value1, value2, value3) {
//         this.studentName = value1;
//         this.StuPlace = value2;
//         this.student_Course = value3;
//     }

//     print_Student_details() {
//         console.log(this.studentName, this.StuPlace, this.student_Course);
//     }
// }

// const stu1 = new Student();   // Correct Class Name

// stu1.studentdetails("Nihar", "Bangalore", "Playwright");

// stu1.print_Student_details();

// Encapsulation - Binding the data between the methods in a class

// Setter - Assign the Values to Variables

//Multilevel

// class A{
//     m1(){
//         console.log("This is M1 method")
//     }
//      m2(){
//         console.log("This is M2 method")
//     }
//      m3(){
//         console.log("This is M3 method")
//     }
//      m4(){
//         console.log("This is M4 method")
//     }
// }

// class B extends A{
//     m5(){
//         console.log("This is M5 method")
//     }
//      m6(){
//         console.log("This is M6 method")
//     }

// }

// class C extends B{
//     m7(){
//         console.log("This is M7 method")
//     }
//      m8(){
//         console.log("This is M8 method")
//     }
// }

// const Obj = new B
// Obj.m5() // from parent B
// Obj.m1() // from parent A
// Obj.m8() // child

//const Obj = new C
//Obj.m5() // from parent B
//Obj.m1() // from parent A
//Obj.m8() // child

class A {
  add(num1, num2) {
    console.log(num1);
    console.log(num2);

    console.log(num1 + num2);
  }
  prientMessage() {
    console.log("This method is from parent");
  }
}

class B extends A {
  add(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num1 + num2 + num3);
  }
  prientMessage() {
    console.log("This method is from Child");
  }
}
//const obj = new A();
//obj.prientMessage(); // Method Overridding
//obj.add(4, 8);  // Method Overridding

const parentOBj  = new A()

parentOBj.add(2,6,8)
