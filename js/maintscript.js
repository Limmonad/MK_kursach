"use strict";
let button = document.querySelector(".contact-form-send");
let form = document.querySelector(".contact-form");
let nams = document.getElementById("nams");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let topic = document.getElementById("topic");
let telephone = document.getElementById("telephone");
let comment = document.getElementById("comment");
let date = document.getElementById("date");
let a = [nams, surname, email, topic, telephone, comment, date];
let d = document.createElement("div");
function mk() {
  d.classList.add("errorAnswer");
  d.innerHTML = "<p>Введите корректный номер телефона.Формат 89997776533</p>";
  telephone.before(d);
}
// Проверка всех полей на пустое значение.И также отдельная проверка на номер телефона.
// Проверка email прописана в html коде, а именно добавлен pattern и required
function validateForm() {
  let valid = true;
  if (
    telephone.value.length != 11 ||
    (isNaN(+telephone.value) && telephone.value) ||
    telephone.value[0] != "8"
  ) {
    valid = false;
    telephone.style.border = "1px solid red";
    d.style.display = "block";
    mk();
  } else {
    d.style.display = "none";
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (!a[i].value) {
      a[i].style.border = "1px solid red";
    }
  }
  if (valid == true) {
    return valid;
  }
}
// Открываем БД. Создаю таблицу и заношу данные в неё
let db = openDatabase("myDB", "1.0", "MK", 2 * 1024 * 1024);
function saveData() {
  let nams = document.getElementById("nams").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let topic = document.getElementById("topic").value;
  let telephone = document.getElementById("telephone").value;
  let comment = document.getElementById("comment").value;
  let date = document.getElementById("date").value;
  db.transaction(function (tx) {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS todo (nams, surname, email, topic, telephone, comment, date)"
    );
    tx.executeSql(
      "INSERT INTO todo (nams, surname, email, topic, telephone, comment, date) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nams, surname, email, topic, telephone, comment, date]
    );
  });
}
// -----------------------------------
// -------------------
// -------
// Отловка символов клавиатуры
// ------------------------
// ---------
form.addEventListener("keydown", function (e) {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
  }
  email.style.border = "none";
});
// ----------------------------
var url = document.location.href;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm() == true) {
    saveData();
    alert("Форма заполнена");
    let l = document.location;
    l.href = "AnswerBD.html";
  }
});
// Конец кода
// -------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------
