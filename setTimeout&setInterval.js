console.log(1)
console.log(2)
console.log(3)
setTimeout(() => {
    console.log(4)
}, 3000);
console.log(5)
console.log(6)

let num = 0;
const clockId = setInterval(() => {
    num++
    console.log(num)
    if (num >= 10) {
        clearInterval(clockId)
    }
}, 1000);