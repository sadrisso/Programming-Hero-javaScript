
const URL = "https://jsonplaceholder.typicode.com/todos/1";

function loadData ()
{
    fetch(URL)
    .then(response => response.json)
    .then(json => console.log(json))
}

