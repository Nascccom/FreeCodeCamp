class Comment {
    constructor (text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('This is a first your comment')

firstComment.upvote()
console.log(firstComment.votesQty)
