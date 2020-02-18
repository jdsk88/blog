// loading evente listener at browser start
window.addEventListener("load", event => {
  sendform();
});
//send new user data to server
const sendform = () => {
// html objects variables declaration
  const form = document.querySelector("form.user-add-form");
  let firstName = document.querySelector("input#fname");
  let lastName = document.querySelector("input#lname");
  let email = document.querySelector("input#email");
  let phone = document.querySelector("input#tel");
  let validationContener = document.querySelector(".validation");
// form submit click listener
  form.addEventListener("submit", e => {
    e.preventDefault();
// check if typed user already exist
    if (validationForm(firstName, lastName, email, phone)) {
fetch(`http://localhost:3000/users?first_name=${firstName.value}&last_name=${lastName.value}&e_mail=${email.value}&tel=${phone.value}`, {})
.then(response => {
  return response.json();
})
.then(response => {
// if response 
  if (response.length == 0) {
    insertCustomer(firstName, lastName, email, phone);
    form.reset();
    validationContener.style.display = "none";
  } else {
  validationContener.style.display = "block";
  validationContener.innerText = "Uzytkownik juz istnieje!";
  }
});
      
} else {
      validationContener.style.display = "block";
      validationContener.innerText = "Wypełnij wszystkie pola!";
    }
  });
};

const insertCustomer = (firstName, lastName, email, phone) => {
  const time = new Date();
  fetch("http://localhost:3000/users", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "POST",
    body: JSON.stringify({
      first_name: `${firstName.value}`,
      last_name: `${lastName.value}`,
      e_mail: `${email.value}`,
      tel: `${phone.value}`,
      dateJoin: `${time}`
    })
  });
};

const validationForm = (firstName, lastName, email, phone) => {
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    email.value.length > 0 &&
    phone.value > 0
  ) {
    return true;
  }
  return false;
};


// // actual time variable
// const time = new Date();
// // declare way to the inputs
// let first_name = document.querySelector("input#fname");
// let last_name = document.querySelector("input#lname");
// let e_mail = document.querySelector("input#email");
// let tel = document.querySelector("input#tel");
// // inputs.length
// // if all inputs are filed then send post-request, else display alert
// console.log(first_name, last_name, e_mail, tel);
// if (
//   first_name.value > 0 &&
//   last_name.value > 0 &&
//   e_mail.value > 0 &&
//   tel.value > 0
// ) {
//   // handle the event when button submit is clicked
//   document
//     .querySelector("form.user-add-form")
//     .addEventListener("submit", function(e) {
//       // prevent browser restart after submit
//       e.preventDefault();
//       // show all inputs value in console
//       console.log(first_name.value);
//       console.log(last_name.value);
//       console.log(e_mail.value);
//       console.log(tel.value);
//       console.log(time);
//       // data to server
//       fetch("http://localhost:3000/users", {
//         headers: { "Content-Type": "application/json; charset=utf-8" },
//         method: "POST",
//         body: JSON.stringify({
//           first_name: `${first_name.value}`,
//           last_name: `${last_name.value}`,
//           e_mail: `${e_mail.value}`,
//           tel: `${tel.value}`,
//           dateJoin: `${time}`
//         })
//       });
//     });
//   // clear all inputs value after submit
//   document.querySelector("form.user-add-form").reset();
// }
