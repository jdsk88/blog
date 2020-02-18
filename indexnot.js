// actual time variable
const time = new Date();
// declare way to the inputs
let first_name = document.querySelector('input#fname');
let last_name = document.querySelector('input#lname');
let e_mail = document.querySelector('input#email');
let tel = document.querySelector('input#tel');
// handle the event when button submit is clicked
document.querySelector('form.user-add-form').addEventListener('submit', function (e) {
// prevent browser restart after submit
    e.preventDefault();
// show all inputs value in console 
    console.log(first_name.value);    
    console.log(last_name.value);    
    console.log(e_mail.value);    
    console.log(tel.value);
    console.log(time);
// data to server
fetch("http://localhost:3000/users", {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: "POST",
  body: JSON.stringify({
    first_name: `${first_name.value}`,
    last_name: `${last_name.value}`,
    e_mail: `${e_mail.value}`,
    tel: `${tel.value}`,
    dateJoin: `${time}`
  })
})
// clear all inputs value after submit
document.querySelector('form.user-add-form').reset();
})
