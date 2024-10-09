
const buttonsContainer = document.getElementById("categories");
const selectedPetsContainer = document.getElementById("selected-pets")


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
            <button class="btn btn-outline" onclick="displayByCategory('${category.category}')">${category.category}</button>
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
    let allPetDataContainer = document.getElementById("all-pet-data");
    allPetDataContainer.innerHTML = ""

    data.forEach((d) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src="${d.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${d.category}</h2>
                    <p>Price: ${d?.price}</p>
                    <p>Dob: ${d?.date_of_birth}</p>
                    <p>Id: ${d?.petId}</p>
                </div>
                <div class="m-5">
                    <button class="btn bg-red-500 text-white" onclick="displayByLike('${d.petId}')">Like</button>
                </div>
            </div>
        `
        allPetDataContainer.append(card);
    })
}


const displayByCategory = async (item) =>
{
    console.log(item)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${item}`)
    const data = await res.json()

    console.log(data?.data)

    displayAllPets(data?.data);
}

const displayByLike = async (id) =>
{

    console.log(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await res.json();

    const selectedPet = document.createElement("div");
    selectedPet.classList = "w-[100px]"
    selectedPet.innerHTML = `
        <img src=${data.petData.image}>
    `

    selectedPetsContainer.append(selectedPet);

    console.log(data.petData.image)
}



categoryData();
allPetData();