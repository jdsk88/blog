export class Article {

    constructor(){
        this.el = document.querySelector('#postList')
        this.posts = []
        if (!this.el) { throw Error('NO POSTS') }
    }

    loadPosts(posts){
        this.posts = posts
    }
    addComment(post){
        console.log(post)
    }
    render() {
        this.el.innerHTML = ''

        this.posts.forEach((post) => {
            const div = this.renderPost(post);
            this.el.append(div)
        })
        if (this.post.length == 0) {
            this.el.innerHTML = `<div class="list-group-item text-muted text-center"> 
            No products found </div>`
        }
    }
    renderPost(post) {
        const div = document.createElement('div');
        div.classList.add('list-group-item');
        div.innerHTML = ``
    }

}
export default Article

