// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
const date = Date(2012, 1, 20, 3, 12);
// alert(date);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
//  вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

function getDateAgo(date, days) {
  const dateMs = +date;

  const daysToMs = days * 24 * 60 * 60 * 1000 - 24 * 60 * 60 * 1000;

  const newDate = new Date(dateMs - daysToMs);

  return newDate;
}

let date1 = new Date(2015, 0, 2);

console.log(getDateAgo(date1, 2));

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
  let lastDay = new Date(year, month + 1, 0);
  return lastDay.getDate();
}

console.log(getLastDayOfMonth(2012, 0));

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  let ms = new Date();
  let today = new Date(ms.getFullYear(), ms.getMonth(), ms.getDate());
  let d = ms - today;
  return Math.round(d / 1000);
}
console.log(getSecondsToday());

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let secondsInDay = 86400;
  return secondsInDay - getSecondsToday();
}
console.log(getSecondsToTomorrow());

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно:
// "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let dif = new Date() - date;
  if (dif < 1000) {
    return "прямо сейчас";
  }
  let seconds = Math.floor(dif / 1000);
  if (seconds < 60) {
    return seconds + " сек. назад";
  }
  let minutes = Math.floor(dif / 60000);
  if (minutes < 60) {
    return minutes + " мин. назад";
  }
  return `${date.getDate()}.${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
