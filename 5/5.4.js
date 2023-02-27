let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
// alert(fruits.length); // ?
//4, тк мы просто скопировали ссылку

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

function changeStyle(arr) {
  if (arr.length % 2 !== 0) {
    styles[Math.floor(arr.length / 2)] = "Классика";
  } else if (arr.length % 2 === 0) {
    styles[arr.length / 2 - 1] = "Классика";
  }
}
changeStyle(styles);
console.log(styles.shift());
styles.unshift(...["Рэп", "Регги"]);
console.log(styles);

// Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // Выведится массив,  последний элемент которого будет функция. Потому что массивы это тоже объекты

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const numbers = [];
  while (true) {
    const num = prompt("Enter num: ", "");
    if (num === "" || num === null || !isFinite(num)) {
      break;
    }
    numbers.push(+num);
  }
  let sum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum);
}

sumInput();

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
  let maxSum = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, -2, -3, 1, 7]));
