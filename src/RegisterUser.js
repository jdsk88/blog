export class RegisterUser {
  constructor() {
    this.form = document.querySelector("form.user-add-form");
    this.firstName = document.querySelector("input#fname");
    this.lastName = document.querySelector("input#lname");
    this.email = document.querySelector("input#email");
    this.phone = document.querySelector("input#tel");
    this.userName = document.querySelector("input#uname");
    this.passwd = document.querySelector("input#passwd");
    this.passwdValid = document.querySelector("input#passwdValid");
    this.select = document.querySelector("select#select");
    this.validationContener = document.querySelector(".validation");
    this.loader = document.querySelector("#loader");
    this.sendform();
    this.errors = [];
    this.addUserFormBtn = document.querySelector("button#UserFormToggle");
    this.userFormBtnToggle();
    // this.userNameValidator();
    // this.passwordValidationForm();
  }
  //send new user data to server
  sendform() {
    console.log("form");
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      // check typed user is already exist
      console.log("submit");
      this.showLoader();
      if (this.validationForm()) {
        // fetch(`http://localhost:3000/users?user_name=${this.userName.value}`,{})
        fetch(
          `http://localhost:3000/users?user_name=${this.userName.value}&password=${this.passwd.value}&first_name=${this.firstName.value}&last_name=${this.lastName.value}&e_mail=${this.email.value}&tel=${this.phone.value}`,
          {}
        )
          .then(response => {
            return response.json();
          })

          .then(response => {
            // if response = nothing
            if (response.length == 0) {
              this.insertCustomer();
              this.form.reset();
              this.validationContener.style.display = "none";
            } else {
              console.log("Uzytkownik o danych:");
              console.log(this.userName.value);
              // console.log(this.passwd.value);
              console.log(this.firstName.value);
              console.log(this.lastName.value);
              // console.log(this.email.value);
              // console.log(this.phone.value);
              console.log("jest zarejestrowany w bazie ");
              this.validationContener.style.display = "block";
              this.validationContener.innerText = "Uzytkownik juz istnieje!";
            }
            this.hideLoader();
          });
      } else {
        if (this.errors.length > 0) {
          this.validationContener.style.display = "block";
          this.validationContener.innerHTML = "";
          this.errors.forEach(error => {
            const div = document.createElement("div");
            div.innerText = error;
            this.validationContener.appendChild(div);
          });
          this.hideLoader();
        }
      }
    });
  }

  showLoader (){
this.loader.style.display = "inline-block";
  }

  hideLoader() {
    this.loader.style.display = "none";
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
    console.log(`
     insertCustomer() user add post-request
    ----------------------------------------
    |--------------COMPLETE----------------|
    ----------------------------------------
      User name    :   ${this.userName.value}
    ----------------------------------------
      Password     :   ${this.passwd.value}  
    ----------------------------------------
      First name   :   ${this.firstName.value}
    ----------------------------------------
      Last name    :   ${this.lastName.value}
    ----------------------------------------
      e-mail       :   ${this.email.value}   
    ----------------------------------------
      Phone        :   ${this.phone.value}   
    ----------------------------------------
      Default view :   ${this.select.value}  
    ----------------------------------------
    `);
  }
  validationForm() {
    let emptyFields = false;
    let passwordMatch = false;
    this.errors = [];
    if (
      this.userName.value.length > 0 &&
      this.passwd.value.length > 0 &&
      this.firstName.value.length > 0 &&
      this.lastName.value.length > 0 &&
      this.email.value.length > 0 &&
      this.phone.value.length > 0
    ) {
      emptyFields = true;
    } else {
      this.errors.push("empty fields");
      emptyFields = false;
    }

    if (this.passwordValidationForm()) {
      passwordMatch = true;
    } else {
      passwordMatch = false;
      this.errors.push("password");
    }

    return emptyFields && passwordMatch ? true : false;
  }
  passwordValidationForm() {
    if (this.passwd.value === this.passwdValid.value) {
      return true;
    }
    return false;
  }

  // userFormBtnToggle() {
  //   if (this.addUserFormBtn.addEventListener("click", event)) {
  //     return true;
  //   }
  //   return false;
  // }

  userFormBtnToggle() {
    this.addUserFormBtn.addEventListener("click", event => {
      if (this.form.style.display == "block") {
        console.log("menu is close", event);
        this.form.style.display = "none";
        this.addUserFormBtn.style.background = "blue";
        this.addUserFormBtn.style.transform =  "rotate(0.0turn)";
      } else {
        console.log("menu is open", event);
        this.form.style.display = "block";
        this.addUserFormBtn.style.background = "red";
        this.addUserFormBtn.style.transform =  "skew(30deg, 20deg)";
      }
    });
  }
}
