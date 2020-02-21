export class Comment {
  constructor(
    commentAuthor,
    commentBody,
    commentDate,
    commentLove,
    commentHate
  ) {
    this.comment = document.querySelector("#comment");
    this.commentAuthor = commentAuthor;
    this.commentBody = commentBody;
    this.commentDate = commentDate;
    this.commentLove = commentLove;
    this.commentHate = commentHate;
  }

  commentObjectValidator() {
    if (
      !this.commentAuthor ||
      !this.commentBody ||
      !this.commentDate ||
      !this.commentLove ||
      !this.commentHate
    ) {
      throw Error("Comment data lost");
    }
  }
  render() {
    const comment = document.createElement("div"); 
    comment.innerHTML = `

    <div class="container">
    <div class="card">
    <div class="article-settings">
    <p class="titie">${this.commentAuthor}</p>
    <p class="titie">${this.commentBody}</p>
    <p class="titie">${this.commentDate}</p>
    <p class="titie">${this.commentLove}</p>
    <p class="titie">${this.commentHate}</p>
    </div>
    </div>
    </div>
      `;
    this.comment.appendChild(comment)
  }
}
