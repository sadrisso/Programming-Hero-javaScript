let name = ["abul", "kabul", "abul", "sabul", "tutul", "kabul"];

function checkDuplicates (names) {
    const noDupplicate = [];
    for (res of names) {
        if (noDupplicate.includes(res) === false) {
            noDupplicate.push(res);
        }
    }
    return noDupplicate;
}

let result = checkDuplicates(name);
console.log(result)