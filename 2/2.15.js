//else не обязателен,функциибудутрабоать одинаково

//Переписать через || или ?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // return confirm("Родители разрешили?");
  }
}

function checkAge2(age) {
  //   return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge3(age) {
  //   return age > 18 || confirm("Родители разрешили?");
}

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
  if (a < b) {
    return a;
  } else if (b > a) {
    return b;
  }
}

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
function pow(a, b) {
  if (!isInteger(b)) {
    console.log("Число не целое, число должно быть целым");
    return 0;
  }
  if (b === 0) {
    console.log(1);
    return 1;
  }
  let acc = 1;
  for (let i = 0; i < b; i++) {
    acc *= a;
  }
  console.log(acc);
  return acc;
}
function isInteger(num) {
  return num % 1 === 0;
}
pow(4, 3.0); //64
pow(4, 3.9); //64
pow(4, 0); //64
