//task 3
// var calculator = {
//   sum: function (a, b) {
//     var result = a + b;
//     console.log(result);
//   },
//   sub: function (a, b) {
//     var result = a - b;
//     console.log(result);
//   },
//   mul: function (a, b) {
//     var result = a * b;
//     console.log(result);
//   },
//   div: function (a, b) {
//     var result = a / b;
//     console.log(result);
//   },
// };
// var a = +prompt("Впишіть перше число:");
// var sign = prompt("Введіть знак:");
// var b = +prompt("Впишіть друге число:");
// if (isNaN(a) || isNaN(b)) {
//   console.log("Один з елементів не є число!");
// }
// if (sign == "+") {
//   calculator.sum(a, b);
// } else if (sign == "-") {
//   calculator.sub(a, b);
// } else if (sign == "*") {
//   calculator.mul(a, b);
// } else if (sign == "/") {
//   calculator.div(a, b);
// } else {
//   console.log("Error");
// }


//task 1
// class Vehicle {
//   constructor(name, model, age) {
//     this.name = name;
//     this.model = model;
//     this.age = age;
//   }

//   showFullData() {
//     console.log(`Марка: ${this.name}, Модель: ${this.model}, Рік: ${this.age} years`);
//   }
// }

// const myCar = new Vehicle('Porsche', '911', 1);
// myCar.showFullData();


//task 2
class Vehicle {
  constructor(name, model, age) {
    this.name = name;
    this.model = model;
    this.age = age;
  }

  showFullData() {
    console.log(`Марка: ${this.name}, Модель: ${this.model}, Рік: ${this.age} years`);
  }
}

class Car extends Vehicle {
  constructor(name, model, age, fuelType) {
    super(name, model, age);
    this.fuelType = fuelType;
  }

  canMove() {
    console.log(`${this.name} рухається використовуючи ${this.fuelType} паливо`);
  }
}

const tesla = new Car('Tesla', 'Model X', 2, 'електричне');
const mercedes = new Car('Mercedes', 'E-Class', 3, 'бензинове');

tesla.showFullData();
tesla.canMove();

mercedes.showFullData();
mercedes.canMove();