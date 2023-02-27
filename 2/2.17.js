//Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

const ask2 = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask2(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
