
function sum (a, b, c) {
    console.log(arguments)
    console.log(arguments[4])
    console.log(typeof arguments)
    const args = [...arguments];

    console.log(`This is an array ${args} made by using sprade operator from an array like object`)
    const sum = a + b + c;
    return sum;
}

const result = sum(12,22,33,45,32,11,22);
console.log(result);