"use strict";
// let x = document.querySelectorAll("ul li")[1];
// function validateEmail(email) {
//   if (x.length === 0) {
//     return { error: "Это поле обязательно для заполнения" };
//   }
//   var pattern = /^[a-z0-9_.-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
//   if (x.search(pattern) === -1) {
//     return { error: "Поле email не соответствует формату" };
//   }
//   return { valid: true };
// }

// let email = document.getElementById("email");
// console.log(email);
// email.addEventListener("input", function (e) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// let but = document.querySelector(".contact-form-send");
// let namee = document.querySelector(".contact-form-link");
// let surname = document.querySelector(".contact-form-link");
// let form = document.querySelector(".form-contact");
// but.onlick = function () {
//   function validateform() {
//     let valid = true;

//     if (namee.placeholder == "") {
//       alert("Пожалуйста заполните поле 'Ваше имя'.");
//       valid = false;
//     }

//     return valid;
//   }
//   validateform();
// };

// let flag = true;
// but.onclick = function () {

//   namee.style.border = "2px solid red";
// };

let div = document.createElement("div");
div.className = "form-contact";
