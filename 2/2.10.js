//1
let number = prompt("Enter number", 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

//2
// в if
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// в ?
let result;

a + b < 4 ? (result = "Мало") : (result = "Много");

//3
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login;
let message;

message =
  login === "Сотрудник"
    ? "Привет"
    : login === "Директор?"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";
