import { RegisterUser } from './RegisterUser.js'
import { User } from './User.js'
import { ArticleSettings } from './ArticleSettings.js';
import { Article } from './Article.js';
import { Navbar } from './Navbar.js';
import { Comment } from './Comment.js';


window.addEventListener("load", event => {
let addUserForm = new RegisterUser();
let user = new User('jdsk88','mypasswd','Maciej','Jakobszy','jdsk88@gmail.com','575-671-112','2020-02-20','responsive','./data/img/avatar.png','#1');
let articleSettings = new ArticleSettings('article time','article validator');
let article = new Article('body','add date','last update','author','title','views: 0','https://marketing.dcassetcdn.com/blog/2015/October/logo-logomark-logotype/Pepsi_Logotype_828x400.png','key words',);
let navbar = new Navbar();
let comment = new Comment(1,2,3,4,5);
user.checkUserObject();
user.render();
articleSettings.checkArticleSettingsObject();
articleSettings.render();
article.checkArticleObject();
article.render();
comment.render();
navbar.render();
navbar.clock();
// navbar.userFormBtnToggle();
// addUserForm.render();
// let time =  date.format(new Date(), "HH:mm:ss");
// console.log(time)
});

