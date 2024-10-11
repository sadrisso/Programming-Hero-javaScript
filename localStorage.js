
const setItem = () =>
{
    localStorage.setItem("age", 22)
}

const addProduct = () =>
{
    const productField = document.getElementById("product-name");
    const quantityField = document.getElementById("product-quantity");
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


const displayProduct = (product, quantity) =>
{
    const productContainer = document.getElementById("productContainer");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;

    productContainer.append(li);
}

const getStoredShoppingCart = () =>
{
    const storedCart = localStorage.getItem("cart");
    let cart = {}

    if(storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>
{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified)
}

const displayProductFromLocalStorage = () =>
{
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart) {
        const quantity = savedCart[product]
        console.log(product, quantity)

        displayProduct(product, quantity)
    }
}
displayProductFromLocalStorage()