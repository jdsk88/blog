export class addUserForm {
  constructor() {
    this.form = document.querySelector("form.user-add-form");
    this.firstName = document.querySelector("input#fname");
    this.lastName = document.querySelector("input#lname");
    this.email = document.querySelector("input#email");
    this.phone = document.querySelector("input#tel");
    this.userName = document.querySelector("input#uname");
    this.passwd = document.querySelector("input#passwd");
    this.select = document.querySelector("select#select");

    this.validationContener = document.querySelector(".validation");
    this.sendform();
  }
  //send new user data to server
  sendform() {
    console.log("form");
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      // check if typed user already exist
      console.log("submit");
      if (this.validationForm()) {
        fetch(
          `http://localhost:3000/users?user_name=${this.userName.value}&password=${this.passwd.value}&first_name=${this.firstName.value}&last_name=${this.lastName.value}&e_mail=${this.email.value}&tel=${this.phone.value}`,
          {}
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            // if response
            if (response.length == 0) {
              this.insertCustomer();
              this.form.reset();
              this.validationContener.style.display = "none";
            } else {
              console.log("Uzytkownik o danych: ");
              console.log(this.userName.value);
              console.log(this.passwd.value);
              console.log(this.firstName.value);
              console.log(this.lastName.value);
              console.log(this.email.value);
              console.log(this.phone.value);
              console.log("jest zarejestrowany w bazie ");
              this.validationContener.style.display = "block";
              this.validationContener.innerText = "Uzytkownik juz istnieje!";
            }
          });
      } else {
        this.validationContener.style.display = "block";
        this.validationContener.innerText = "Wypełnij wszystkie pola!";
      }
    });
  }

  insertCustomer() {
    const time = new Date();
    fetch("http://localhost:3000/users", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        user_name: `${this.userName.value}`,
        password: `${this.passwd.value}`,
        first_name: `${this.firstName.value}`,
        last_name: `${this.lastName.value}`,
        e_mail: `${this.email.value}`,
        tel: `${this.phone.value}`,
        dateJoin: `${time}`,
        default_view: `${this.select.value}`
      })
    });
    console.log("Uzytkowniki o danych : ");
    console.log(this.userName.value);
    console.log(this.passwd.value);
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.email.value);
    console.log(this.phone.value);
    console.log("został zarejsetwowany w bazie ");
  }
  validationForm() {
    if (
      this.firstName.value.length > 0 &&
      this.lastName.value.length > 0 &&
      this.email.value.length > 0 &&
      this.phone.value > 0
    ) {
     return true;
    }
    return false;
  }
}
