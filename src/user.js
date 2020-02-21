export class User {
  constructor(
    user_name,
    password,
    first_name,
    last_name,
    e_mail,
    tel,
    dateJoin,
    default_view,
    avatar,
    id
  ) {
    this.user = document.querySelector("#user");
    this.user_name = user_name;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.e_mail = e_mail;
    this.tel = tel;
    this.dateJoin = dateJoin;
    this.default_view = default_view;
    this.avatar = avatar;
    this.id = id;
  }

  checkUserObject() {
    if (
      !this.user_name ||
      !this.password ||
      !this.first_name ||
      !this.last_name ||
      !this.e_mail ||
      !this.tel ||
      !this.dateJoin ||
      !this.avatar ||
      !this.id
    ) {
      throw Error("User data lost");
    }
  }
  render() {
    const user = document.createElement("div");
    user.innerHTML = `
    <div class="container">
  <div class="card">
  <div class="card-nav"></div>
    <div class="row">
      <div class="col">
        <img src="${this.avatar}" alt="avatar">
        <p class="title">${this.user_name}</p>
        <p class="title">${this.password}</p>
        <p class="title">${this.id}</p>
      </div>
      <div class="col">
        <p class="title">${this.first_name} ${this.last_name} </p>
        <p class="title">${this.dateJoin}</p>
        <p class="title">${this.default_view}</p>
        <a href="mailto:${this.e_mail}">${this.e_mail}</a>
  <a href="tel:${this.tel}">${this.tel}</a>
  <a href="http://github.com/jdsk88">github.com/jdsk88</a>
      </div>
    </div>
</div>
</div>`;
    this.user.appendChild(user);
  }
}
