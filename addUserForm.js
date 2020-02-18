export class addUserForm {
    constructor(name) {
        this.name = name;
        this.form = document.querySelector("form.user-add-form");
        this.firstName = document.querySelector("input#fname");
        this.lastName = document.querySelector("input#lname");
        this.email = document.querySelector("input#email");
        this.phone = document.querySelector("input#tel");
        this.validationContener = document.querySelector(".validation");
        this.sendform();
        this.insertCustomer();
        this.validationForm();
    }
    //send new user data to server
    sendform() {
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            // check if typed user already exist
            if (this.validationForm(this.firstName, this.lastName, this.email, this.phone)) {
                fetch(`http://localhost:3000/users?first_name=${firstName.value}&last_name=${lastName.value}&e_mail=${email.value}&tel=${phone.value}`, {})
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        // if response 
                        if (response.length == 0) {
                            insertCustomer(firstName, lastName, email, phone);
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
    ;
    insertCustomer() {
        (firstName, lastName, email, phone) => {
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
    }
    validationForm() {
        (firstName, lastName, email, phone) => {
            if (firstName.value.length > 0 &&
                lastName.value.length > 0 &&
                email.value.length > 0 &&
                phone.value > 0) {
                return true;
            }
            return false;
        };
    }
}

