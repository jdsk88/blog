export class Article {
  constructor(
    articleBody,
    articleAddDate,
    articleLastUpdate,
    articleAuthor,
    articleTitle,
    articleNumberOfViews,
    articleImage,
    articleKeyWords
  ) {
    this.article = document.querySelector("#article");
    this.articleBody = articleBody;
    this.articleAddDate = articleAddDate;
    this.articleLastUpdate = articleLastUpdate;
    this.articleAuthor = articleAuthor;
    this.articleTitle = articleTitle;
    this.articleNumberOfViews = articleNumberOfViews;
    this.articleImage = articleImage;
    this.articleKeyWords = articleKeyWords;
  }
  checkArticleObject() {
    if (
      !this.articleBody ||
      !this.articleAddDate ||
      !this.articleLastUpdate ||
      !this.articleAuthor ||
      !this.articleTitle ||
      !this.articleNumberOfViews ||
      !this.articleImage ||
      !this.articleKeyWords
    ) {
      throw Error("Article data lost");
    }
  }

  render() {
    const article = document.createElement("div");
    article.innerHTML = `
    <div class="container">
        <div class="card">
            <div class="">
              <img src="${this.articleImage}" class="" style="width: 50%; height: 100%;" >
              <h3 class="">
              <a class="" href="#">${this.articleTitle}</a>
              </h3>
              <div class="mb-1 text-muted">${this.articleAddDate}</div>
              <p class="card-text mb-auto">${this.articleBody}</p>
              <p>${this.articleKeyWords}</p>
              <p>${this.articleNumberOfViews}</p>
              <p>${this.articleLastUpdate}</p>
              <p>${this.articleAuthor}</p>
            </div>
        </div>
    <div>
    `;
    this.article.appendChild(article);
  }
}
