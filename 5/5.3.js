// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  }
  return false;
}

console.log(checkSpam("xxxViagraVasya"));
console.log(checkSpam("Vasya"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//  если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "...";
  }
  return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

console.log(extractCurrencyValue("$120") === 120);
