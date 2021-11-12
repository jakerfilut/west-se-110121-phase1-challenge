// write your code here
const cardImg = document.getElementById("card-image")
const cardTitle = document.getElementById("card-title")
const cardLikes = document.getElementById("like-count")
const commentList = document.getElementById("comments-list")
const likeBtn = document.getElementById("like-button")
const likeCount = document.getElementById("like-count")
const postBtn = document.getElementsByClassName("comment-button")
const commentBar = document.getElementById("comments-list")

const url = "http://localhost:3000/images/1"

fetch(url)
    .then(res => res.json())
    .then(renderPic)

function renderPic(pic) {
    cardImg.src = pic.image
    cardTitle.innerText = pic.title
    cardLikes.innerText = pic.likes
    comments()
    function comments(comment) {
        console.log(pic.comments[0].content)
    }

    commentBar.innerHTML = `<li> ${pic.comments[0].content} </li>
    <li> ${pic.comments[1].content} </li>
    <li> ${pic.comments[2].content} </li>`


    likeBtn.addEventListener("click", addlikes)
    function addlikes(e) {
        e.preventDefault()
        likeCount.innerText = ++pic.likes
    }
    form = document.getElementById("comment-form")
    form.addEventListener('submit', buildComments);
    function buildComments(e) {
        e.preventDefault();
        let newComment = document.createElement('li');
        newComment.textContent = e.target.comment.value;
        commentBar.append(newComment);
        form.reset();
    }
}