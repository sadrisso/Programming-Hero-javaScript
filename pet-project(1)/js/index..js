
const buttonsContainer = document.getElementById("categories");
const allPetDataContainer = document.getElementById("all-pet-data");

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


const allPetData = async () =>
{
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data = await res.json();

    console.log(data.pets)
    displayAllPets(data.pets)
}

const displayAllPets = (data) =>
{
    data.forEach((d) => {
        console.log(d)
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src="${d.image}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        `
        allPetDataContainer.append(card);
    })
}



categoryData();
allPetData();