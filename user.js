//declare node_modules
const date = require('date-and-time');
//declare time
const now = new Date();
let time = date.format(now, 'HH:MM:SS A [GMT]Z dddd MMMM YYYY')
//declare inputs
let first_name = document.getElementById('fname');
let last_name = document.getElementById('lname');
let e_mail = document.getElementById('email');
let tel = document.getElementById('tel');

export class UserAdd{
  constructor(selector){
    this.el = document.querySelector(selector);
  }
  loadUsers (users) {
    this.users = users
    console.log('Users-db loaded')
  }
  addProfile (users) {
    document.querySelector('form.user-add-form').addEventListener('submit', function (e) {
      //prevent the normal submission of the form
      e.preventDefault();
      //show inputs in js console
      console.log(first_name.value);    
      console.log(last_name.value);    
      console.log(e_mail.value);    
      console.log(tel.value);
    //send to json-server
    axios
    .post("http://localhost:3000/users", {
      first_name: `${first_name.value}`,
      last_name: `${last_name.value}`,
      e_mail: `${e_mail.value}`,
      tel: `${tel.value}`,
      dateJoin: `${time}`
    })
    .then(resp => {
      console.log(resp.data);
    })
    .catch(error => {
      console.log(error);
    });
    document.querySelector('form.user-add-form').reset();
  });
  }
}
