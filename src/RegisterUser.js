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
              console.log(this.firstName.value);
              console.log(this.lastName.value);
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
        console.log("user add form is close", event);
        this.form.style.display = "none";
        this.addUserFormBtn.style.background = "blue";
        this.validationContener.style.display = "none";
        // this.addUserFormBtn.style.transform =  "rotate(0.0turn)";
      } else {
        console.log("user add form is open", event);
        this.form.style.display = "block";
        this.addUserFormBtn.style.background = "red";
        // this.addUserFormBtn.style.transform =  "skew(30deg, 20deg)";
      }
    });
  }

  render() {
    const addUserForm = document.createElement('div');
    addUserForm.innerHTML = `<div class="container">
      <form class="user-add-form">
        <div class="form-header">SIGN UP!</div>
        <input class="input" id="uname" type="text" placeholder="User Name" />
        <!-- <input class="input" id="passwd" type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/> -->
        <input
          class="input"
          id="passwd"
          type="password"
          placeholder="Password"
        />
        <input
          class="input"
          id="passwdValid"
          type="password"
          placeholder="Password validation"
        />
        <input
          class="input"
          id="fname"
          type="text"
          placeholder="First Name"
        />
        <input class="input" id="lname" type="text" placeholder="Last Name" />
        <input class="input" id="email" type="email" placeholder="e-mail" />
        <input class="input" id="tel" type="tel" placeholder="Phone number" />
        <label class="form-header" for="sort">Choose default view</label>
        <select class="form-header" id="select" name="sort">
          <option value="oldest">Oldest posts</option>
          <option value="latest">Latest posts</option>
        </select>
        <button class="btn btn-sm btn-success" type="submit">
          register user
        </button>
      </form>
      <div class="validation"></div>
    </div>`;
    this.addUserForm.appendChild(addUserForm);
  }


}
