"use strict";

// setTimeout(function mk () {
// contactlist.style.display = "flex";
// contactlist.style.transition = "5s";
// },2000);
// console.log(links);

let button = document.querySelector(".contact-form-send");
let form = document.querySelector(".contact-form");
// let contactlist = document.querySelector(".contact-form__list");
let links = document.querySelectorAll(".contact-form-link");
let nams = document.getElementById("nams");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let topic = document.getElementById("topic");
let telephone = document.getElementById("telephone");
let comment = document.getElementById("comment");
let date = document.getElementById("date");
let a = [nams, surname, email, topic, telephone, comment, date];
function validateForm() {
  let valid = true;
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
function getRand() {
  let rand = Math.random() * 123 + 11;
  return Math.floor(rand);
}
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

// Очиска формы

// ----------------------------------------
function clearTable() {
  db.transaction(function (tx) {
    tx.executeSql("DELETE FROM todo");
  });
}
// ---------------------
// -------
// Отловка клавиатуры
// ------------------------
// ---------
form.addEventListener("keydown", function (e) {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
  }
});
// ----------------------------
var url = document.location.href;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm() == true) {
    // e.target.reset();
    clearTable();
    // document.location = "skills.html";
    saveData();
    alert("Форма заполнена");
    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM todo",
        [],
        function (tx, result) {
          for (var i = 0; i < result.rows.length; i++) {
            const newWindow = window.open("", "_blank");
            newWindow.document.write(
              "<b>" +
                "Ваше имя = " +
                result.rows.item(i)["nams"] +
                "</b><br />",
              "<b>" +
                "Ваше фамилия = " +
                result.rows.item(i)["surname"] +
                "</b><br />",
              "<b>" +
                "Ваше email = " +
                result.rows.item(i)["email"] +
                "</b><br />",
              "<b>" +
                "Ваш email = " +
                result.rows.item(i)["topic"] +
                "</b><br />",
              "<b>" +
                "Ваш телефон = " +
                result.rows.item(i)["telephone"] +
                "</b><br />",
              "<b>" +
                "Дата заполнения = " +
                result.rows.item(i)["date"] +
                "</b><br />",
              "<b>" + "Ваш = " + result.rows.item(i)["comment"] + "</b><br />"
            );
          }
        },
        null
      );
    });
    // ---------------------------------------------------
    // db.transaction(function (tx) {
    //   tx.executeSql(
    //     "SELECT * FROM todo",
    //     [],
    //     function (tx, results) {
    //       var len = results.rows.length;
    //       // Выводим данные в консоль
    //       for (var i = 0; i < len; i++) {
    //         console.log(results.rows.item(i));
    //       }
    //     },
    //     null
    //   );
    // });
  }
});

// -----------------------------------------------------------
// -
// -
// Работа с базами данными

// ----------------------------------------------------

// let db = openDatabase("mydb", "1.0", "My Database", 2 * 1024 * 1024);
// db.transaction(function (tx) {
//   tx.executeSql("CREATE TABLE IF NOT EXISTS users (id unique, name varchar,)");
// });
// db.transaction(function (tx) {
//   tx.executeSql("INSERT INTO users (id, name, age) VALUES (?, ?, ?)", [
//     1,
//     links.value,
//     30,
//   ]);
// });
// db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM users", [], function (tx, result) {
//     for (var i = 0; i < result.rows.length; i++) {
//       console.log(result.rows.item(i));
//     }
//   });
// });

// -------
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   let div1 = document.createElement("div");
//   div1.className = "activexx";
//   div1.textContent = "Привет как дела";
//   console.log(div1);
//   form.append(div1);
// });

// a.addEventListener("click", function () {
//   let valid = true;

//   for (let link of links) {
//     if (link.value == "") {
//       alert(`Пожалуйста заполните поле ${link}`);
//       link.style.border = "1px solid red";
//       valid = false;
//     }
//     return valid;
//   }
// });

// -----------------------------
// --------------
// ---------
// ------
// Работа с базой данной
// let db = openDatabase("mydatabase", "1.0", "My Database", 2 * 1024 * 1024);
// if (!db) {
//   alert("dsdss");
// }

// db.transaction(function (tx) {
//   tx.executeSql(
//     "CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY, name TEXT, email TEXT)"
//   );
// });
// !name -- если поле пустое то не сработает preventDefault
// form.addEventListener("submit", function (e) {
//   let name = document.getElementById("nams").value;
//   let email = document.getElementById("email").value;
//   db.transaction(function (tx) {
//     tx.executeSql("INSERT INTO mytable (name, email) VALUES (?, ?)", [
//       name,
//       email,
//     ]);
//   });
//   db.transaction(function (tx) {
//     tx.executeSql("SELECT * FROM mytable", [], function (tx, results) {
//       var len = results.rows.length;
//       for (var i = 0; i < len; i++) {
//         console.log(results.rows.item(i));
//       }
//     });
//   });
// });
