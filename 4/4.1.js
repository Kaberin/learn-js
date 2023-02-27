// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Можно изменить его свойства, так как в константе хранится ссылка на память а не свойства

// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
//   Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

function sum(object) {
  let acc = 0;
  for (let key in object) {
    acc += object[key];
  }
  return acc;
}

console.log(sum(salaries)); //390
