
const numbers = [1,2,3,4,5,6];

// function doubleIt (num) {
//     return num * 2;
// }

// const doubleIt = x => x * 2;

const result = numbers.map(x => x * 2);
console.log(result)


const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus)



const friends = ["Tom", "Jery", "Tommy", "Oliver", "earGrils"]

const friendsLen = friends.map(arr => arr.length);
console.log(friendsLen);

const firstChar = friends.map(word => word[0]);
console.log(firstChar);




//Filter method practice..
const nums = [112,34,5523,11,22,437,89,65];

const res = nums.filter(x => x >= 1000);
const evenNumber = nums.filter(y => y % 2 === 0);
const oddNumber = nums.filter(z => z % 2 !== 0);
const oddCharFri = friends.filter(fri => fri.length % 2 !== 0);

console.log(res);
console.log(evenNumber);
console.log(oddNumber);
console.log(oddCharFri);



//Reduce method...

const arr = [1,2,3,4,5];
const total = arr.reduce((x, y) => x + y, 0);
const multiply = arr.reduce((a, b) => a * b, 0);


console.log(total, multiply);



const products = [
    {name: "lenovo", id: 1, price: 30000},
    {name: "dell", id: 2, price: 40000},
    {name: "acer", id: 3, price: 50000},
    {name: "hp", id: 4, price: 60000}
]


const names = products.map(product => product.name);
const ids = products.map(p => p.id);
const expensive = products.filter(p => p.price > 50000)
const affordable = products.find(p => p.price < 50000);
const totalPrice = products.reduce((acc, crnt) => acc + crnt.price, 0);
products.forEach(p => console.log(p.price))

console.log(names, ids, expensive, affordable, totalPrice);


