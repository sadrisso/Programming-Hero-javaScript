// write an arrow function that will take 2 perams will multiply the perams and return the value

const multiply = (a, b, c) => a*b*c;
const result = multiply(2,2,2);
console.log(result)



const threeSent = () => {
    return `
    I am a web developer
    and I like to code
    and I like biriyani!!`
}

const sen = threeSent();
console.log(sen)



const def = (a, b=20) => a + b;
const res = def(10);
console.log(res)





const friends = (friends) => {
    const newArr = [];

    // friends.forEach((friend) => {
    //     console.log(friend.length)
    // });

    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newArr.push(friend);
        }
    }

    return newArr;
}


const boys = ["Nasir", "Masum", "Shakil", "Siam", "Moin", "Mim"]
const output = friends(boys);
console.log(output);




const squareSumAvg = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number * 2;
    }
    let average = sum / numbers.length;
    console.log(average)
}

let array = [2,2,2,2,2,2];
squareSumAvg(array);



const arrMaxVal = (arrOne, arrTwo) => {
    let arrThree = [...arrOne,...arrTwo]
    let max = Math.max(...arrThree)
    console.log(max)
}

arrMaxVal([12,333,22], [33,22,11]);