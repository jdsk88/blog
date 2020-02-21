export class ArticleSettings {
  constructor(timePreferences, validityOfArticle) {
    this.articleSettings = document.querySelector("#articleSettings");
    this.timePreferences = timePreferences;
    this.validityOfArticle = validityOfArticle;
  }

  checkArticleSettingsObject() {
    if (!this.timePreferences || !this.validityOfArticle) {
      throw Error("Settings data lost");
    }
  }

  render() {
    const articleSettings = document.createElement("div");
    articleSettings.innerHTML = `<div class="container"> 
    <div class="card">
    <div class="article-settings">
        <p class="title">${this.timePreferences}</p>
        <p class="title">${this.validityOfArticle}</p>
      </div>
      </div>
      </div>`;
    this.articleSettings.appendChild(articleSettings);
  }
}
