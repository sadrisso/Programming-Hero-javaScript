
const buttonsContainer = document.getElementById("categories");

const categoryData = async () =>
{
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();

    displayAllCategories(data.categories);
}


const displayAllCategories = (categories) =>
{
    for (category of categories) {
        const buttons = document.createElement("div");
        buttons.innerHTML = `
            <button class="btn btn-outline">${category.category}</button>
        `
        buttonsContainer.append(buttons);
    }
}



categoryData();