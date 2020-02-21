export class Navbar {
  constructor(logIn, addNewUser, addNewArticle, time, timeH, timeM, timeS, articles, settings) {
    this.navbar = document.querySelector("#navbar-bottom");
    this.logIn = logIn;
    this.addNewUser = addNewUser;
    this.addNewArticle = addNewArticle;
    this.time = time;
    this.timeH = timeH;
    this.timeM = timeM;
    this.timeS = timeS;
    this.articles = articles;
    this.settings = settings;
  }

  checkNavbarObject() {
    if (
      this.logIn ||
      this.addNewUser ||
      this.addNewArticlecle ||
      this.time ||
      this.timeH ||
      this.timeM ||
      this.timeS ||
      this.articles ||
      this.settings
    ) {
    }
  }

  // time interval
  clock() {
    console.log(date.format(new Date(), "HH:mm:ss"),'time');
    this.time =  date.format(new Date(), "HH:mm:ss");
    setInterval(function() {
      this.timeH = date.format(new Date(), "HH");
      this.timeM = date.format(new Date(), "mm");
      this.timeS = date.format(new Date(), "ss");
    }, 1000);
    
  }

  render() {
    const navbar = document.createElement("div");

    navbar.innerHTML = `<div id="navbar" class="navbar-module">
    <div class="flex-btn-container">
    <i class="fas fa-user-plus"></i>
    <i class="far fa-calendar-plus"></i>
    <i class="fas fa-newspaper"></i>
    <i class="fas fa-camera"></i>
    <i class="fas fa-globe"></i>
    <i class="fas fa-sms"></i>
    <i class="fas fa-cog"></i>
    </div>
  </div>`;
    this.navbar.appendChild(navbar);
  }
}


{/* <button id=""><i class="fas fa-sync-alt fa-spin fa-2x"></i></button>
      <button id="">1</button>
      <button id="">1</button>
      <button id="">1</button>
      <button id="">1</button>
      <button id="">1</button>
      <button id="">1</button> */}