// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  const newArr = Array.from(new Set(arr));
  return newArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let sort = arr[i].split("").sort().join("").toLowerCase();

    map.set(sort, arr[i]);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

//Нужно добавить Array.from(map.keys())
