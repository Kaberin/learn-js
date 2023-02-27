// У нас есть объект:
let user = {
  name: "John",
  years: 30,
};
//   Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

const { name, years, isAdmin = false } = user;
console.log(name, years, isAdmin);

// // У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(obj) {
  let maxSalary = 0;
  let maxSalaryName = null;

  for (let [name, salary] of Object.entries(obj)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
}

console.log(topSalary(salaries));
