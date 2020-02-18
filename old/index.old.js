
// import files

//declare node_modules
// const date = require('date-and-time');
//declare time
const now = new Date();
let time = date.format(now, 'HH:MM:SS A [GMT]Z dddd MMMM YYYY')
//declare inputs
var first_name = document.getElementById('fname');
var last_name = document.getElementById('lname');
var e_mail = document.getElementById('email');
var tel = document.getElementById('tel');
document.querySelector('form.user-add-form').addEventListener('submit', function (e) {
    //prevent the normal submission of the form
    e.preventDefault();
    //show inputs in js console
    console.log(first_name.value);    
    console.log(last_name.value);    
    console.log(e_mail.value);    
    console.log(tel.value);
//register user to server
  fetch('http://localhost:3000/users', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
    first_name: `${first_name.value}`,
    last_name: `${last_name.value}`,
    e_mail: `${e_mail.value}`,
    tel: `${tel.value}`,
    dateJoin: `${time}`
    })
  });
  document.querySelector('form.user-add-form').reset();
});
