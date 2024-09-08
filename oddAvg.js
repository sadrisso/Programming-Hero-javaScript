
const numbers = [1,2,23,3,54,56,66,7,8];
let sum = 0;

function oddAvg (numbers) {
    const odds = [];
    for (number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    for (item of odds) {
        sum += item;
    }
    const count = odds.length;
    const avg = sum / count;
    return `Average is ${avg}`
}


let averageOfOdds = oddAvg(numbers);
console.log(averageOfOdds);