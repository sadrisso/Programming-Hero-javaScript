
const URL = "https://jsonplaceholder.typicode.com/todos/1";

function loadData ()
{
    fetch(URL)
    .then(response => response.json)
    .then(json => console.log(json))
}


const url = "https://jsonplaceholder.typicode.com/users";

function loadData2 ()
{
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data));
}

function displayData (data)
{
    const ul = document.querySelector(".user-container");
    for (const user of data) {
        console.log(user.name)
        console.log(ul)
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


const postUrl = "https://jsonplaceholder.typicode.com/posts";

function loadData3 () {
    fetch(postUrl)
    .then(res => res.json())
    .then(data => displayData3(data))
}

function displayData3 (data) {
    const postsContainer = document.getElementById("posts-container")
    for (res of data) {
        console.log(res)
        const post = document.createElement("div");
        post.classList.add("post")
        post.innerHTML = `
            <h3>${res.userId}</h3>
            <h2>${res.title}</h2>
            <p>${res.body}</p>
        `
        postsContainer.appendChild(post)
    }
}

loadData3()