
const listItems = document.getElementById("list-items");
const items = document.getElementsByClassName("item");

for (const item of items) {
    item.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById("btn-add-item").addEventListener("click", function () {
    const nweItem = document.createElement('li');
    nweItem.innerText = 'New item';
    listItems.appendChild(nweItem);
})