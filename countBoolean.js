

const x = [true, false, 22, 43, "Drisso", "hello", {name: "Masum", age: 34}];


function countBoolean (arr) {
    if (!Array.isArray(arr)) {
        return "This is not an array.."
    }

    let count = 0;

    for (let res of arr) {
        if (typeof res === "boolean") {
            count++;
        }
    }
    return count;
}

const result = countBoolean(x);
console.log(result);