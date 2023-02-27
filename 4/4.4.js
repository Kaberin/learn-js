// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат? //ошбика

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
  a,
  b,
  read() {
    this.a = +prompt("Enter the first number", 0);
    this.b = +prompt("Enter the second number", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
  },
};

//   Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let ladder1 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
