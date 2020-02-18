export class addUserForm {
    constructor() {

        this.form = document.querySelector("form.user-add-form");
        this.firstName = document.querySelector("input#fname");
        this.lastName = document.querySelector("input#lname");
        this.email = document.querySelector("input#email");
        this.phone = document.querySelector("input#tel");
        this.validationContener = document.querySelector(".validation");
        this.sendform();
        // this.insertCustomer();
        // this.validationForm();
    }
    //send new user data to server
    sendform() {
        console.log('form');
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            // check if typed user already exist
            console.log('submit');
            if (this.validationForm()) {
                console.log('isValid');
                fetch(`http://localhost:3000/users?first_name=${this.firstName.value}&last_name=${this.lastName.value}&e_mail=${this.email.value}&tel=${this.phone.value}`, {})
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        // if response 
                        if (response.length == 0) {
                            this.insertCustomer();
                            this.form.reset();
                            this.validationContener.style.display = "none";
                        }
                        else {
                            this.validationContener.style.display = "block";
                            this.validationContener.innerText = "Uzytkownik juz istnieje!";
                        }
                    });
            }
            else {
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
                    first_name: `${this.firstName.value}`,
                    last_name: `${this.lastName.value}`,
                    e_mail: `${this.email.value}`,
                    tel: `${this.phone.value}`,
                    dateJoin: `${time}`
                })
            });
    
    }
    validationForm() {

            if (this.firstName.value.length > 0 &&
                this.lastName.value.length > 0 &&
                this.email.value.length > 0 &&
                this.phone.value.length > 0) { // wcześniej sprawdzales this.phone.valuu > 0, z formularza zawsze jest string wiec to nie dzialalo!
                return true;
            }
            return false;
    }
}

