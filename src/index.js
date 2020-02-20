import { RegisterUser } from './RegisterUser.js'
import { User } from './User.js'
// import Article from './article.js';

window.addEventListener("load", event => {
let form = new RegisterUser();
let user = new User('jdsk88','mypasswd','Maciej','Jakobszy','jdsk88@gmail.com','575-671-112','2020-02-20','responsive','./data/img/avatar.png','#1');
user.checkUserObject();
user.render();
});

