class employee {
 static x = 20; //static veriable
  y = 45; //nonstatic veriable
  static method1() {
    console.log("This is a simple method name 1");
    // static method

  }
  method2() {
    console.log("This is a simple method name 2");
    // non static method
  }
//  static method3() {
//     console.log("This is a simple method name 3");
//     // static method
//     this.method1()
//   }
  method4() {
    console.log("This is a simple method name 4");
    this.method2()
  }
}

// const emp1 = new employee()
// console.log(emp1.x)
// emp1.method2()

//employee.method3()

//const emp1 = new employee()
//emp1.method4()
//emp1.method3()

// OOPS
// Encapsulation
// inheritance
// polymorphism
// prototyping

