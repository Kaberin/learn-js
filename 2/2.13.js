//1

//Первый выведет 4 второй 5

//В обоих от 0 до 4

for (let i = 1; i <= 10; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}

//до
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

//После
let i = 0;

while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

//----------//
let number = 101;

while (number < 100) {
  number = +prompt("ВВедите число больше 100");
}

//-----------//
let n = 10;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    console.log("не простое");
    break;
  }
}
