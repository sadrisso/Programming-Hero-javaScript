
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