
const glass = {
    name: "Drink",
    price: 12,
    isCleaned: true,
    color: "White"
}


for (const key in glass) {
    const value = glass[key];
    console.log(key, value)
}


// Using for of on object
const keys = Object.keys(glass);

for (res of keys) {
    const value = glass[res]
    console.log(res, value)
}