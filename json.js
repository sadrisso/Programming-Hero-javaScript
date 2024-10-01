const shop = {
    owner: "Alia",
    address: {
        street: 101,
        area: "Shanmonjil Dhormotola",
        house: 22,
        country: "bd"
    },
    products: ["Laptop", "Desktop", "Mobiles", "Mac", "Air Pods"],
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
const shopOBJ = JSON.parse(shopJSON);

console.log(shopJSON)
console.log(shopOBJ)