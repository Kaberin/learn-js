console.log("Новая задача");

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  const arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

console.log("Новая задача");
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//  ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);

console.log("Новая задача");
// Напишите функцию filterRangeInPlace(arr, a, b),
//  которая принимает массив arr и удаляет из него все значения кроме тех,
//  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i = i - 1;
    }
  }
}
let array = [5, 3, 8, 1];
filterRangeInPlace(array, 1, 4);
console.log(array);

console.log("Новая задача");
// Сортировать в порядке по убыванию
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

console.log(arr1);

console.log("Новая задача");
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

function copySorted(arr) {
  return arr.slice().sort();
}

console.log(sorted);
console.log(arr2);

console.log("Новая задача");

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
// (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

function Calculator() {
  this.operations = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
  };

  this.calculate = function (string) {
    const arr = string.split(" ");
    if (
      +arr[0] === NaN ||
      +arr[2] === NaN ||
      this.operations[arr[1]] === undefined
    ) {
      return "Invalid input!";
    }

    return this.operations[arr[1]](+arr[0], +arr[2]);
  };
  this.addMethod = function (sign, method) {
    this.operations[sign] = method;
  };
}

const myCalc = new Calculator();
console.log(myCalc.calculate("1 + 1"));
myCalc.addMethod("**", (num1, num2) => num1 ** num2);
console.log(myCalc.calculate("2 ** 3"));
console.log(myCalc.calculate("2 * 3"));

console.log("Новая задача");
// У вас есть массив объектов user, и в каждом из них есть user.name.
//  Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

function toArr(arr) {
  const newArr = [];
  arr.forEach((el, i) => (newArr[i] = el.name));

  return newArr;
}

console.log(toArr(users));

console.log("Новая задача");
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами
//  id и fullName, где fullName – состоит из name и surname.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

function usersMapped(users1) {
  const newArr = [];
  for (let i = 0; i < users1.length; i++) {
    const newObj = {
      fullName: `${users1[i].name} ${users1[i].surname}`,
      id: users1[i].id,
    };

    newArr.push(newObj);
  }

  return newArr;
}

console.log(usersMapped(users1));

console.log("Новая задача");
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr3 = [vasya2, petya2, masha2];
console.log(arr3);
function sortByAge(users2) {
  users2.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  });
}
sortByAge(arr3);
console.log(arr3);

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

let arr4 = [1, 2, 3, 4, 5, 6, 7];

function shuffle(array) {
  return array.sort(() => Math.round(Math.random()) - 0.5);
}
console.log(shuffle(arr4));

console.log("Новая задача");
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr5 = [vasya3, petya3, masha3];

function getAverageAge(users) {
  let sumAge = users.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0);
  return sumAge / users.length;
}
console.log(getAverageAge(arr5));

console.log("Новая задача");
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
function unique(arr) {
  const obj = {};
  for (let str of arr) {
    obj[str] = obj[str] + 1 || 1;
  }
  const res = [];
  for (let key in obj) {
    res.push(key);
  }

  return res;
}

console.log(unique(strings));

console.log("Новая задача");
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

let userss = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  const usersById = {};

  for (let user of users) {
    usersById[user.id] = { id: user.id, name: user.name, age: user.age };
  }

  return usersById;
}

console.log(groupById(userss));
