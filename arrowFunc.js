


const person = (p) => p.name;
// const student = {name: "sunayra", age: 44};
const result = person({name: "drir"})

console.log(result);



// sprade operator..


const max = Math.max(12,334,556,77,688,6765,44,33,3,33);
console.log(max)

const numbers = [12,2,2334,455,342,12,1];

const arrMaxx = Math.max(numbers);
const arrMax = Math.max(...numbers);
console.log(arrMaxx, arrMax);



let nums = [1,2,3,4,5];
let digit = [2,3];


nums = [...digit];
digit.push(3,4,5,6)
console.log(`this is nums array ${nums} and this is digit array ${digit}`);



let arr1 = [11,22,33,44,55];
arr1.push(200);


let arr2 = [1,2,3,4,5];
arr1 = [...arr2];

arr2.push(11,22,33,44,55)

console.log(arr1, arr2)

