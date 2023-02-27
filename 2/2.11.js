//2
//1  и 2
//null
//1 и undefined
//3

let age = 500;

if (age >= 14 && age <= 90) {
  console.log("Age в диапазоне от 14 до 90");
}

if (!(age > 14 && age < 90)) {
  console.log("Age не в диапазоне от 14 до 90");
}

if (age < 14 || age > 90) {
  console.log("Age не в диапазоне от 14 до 90");
}

//1 и 3 ифы выполнятся

let user = prompt("Кто там?");

if (user === "Админ") {
  let password = prompt("Пароль");
  if (password === "Я главный") {
    alert("Здравствуйте");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
