// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35,
};
const stringifyed = JSON.stringify(user);
const parsed = JSON.parse(stringifyed);
console.log(parsed);

//   Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

let arr = [];

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    if (arr.includes(value)) return undefined;

    arr.push(value);
    return value;
  })
);
