// Take four parameters. Multiply the four numbers and then return the result


function multiplyNumbers (a, b, c, d) {
    return a * b * c * d;
}

let result = multiplyNumbers(2,2,2,2);
console.log("This is four numbers multiplication : ", result);



/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function evenOddTask (x) {
    if (x % 2 !== 0) {
        x *= 2;
    }
    return x;
}

let res = evenOddTask(55);
console.log(res);


// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


let sum = 0;

function make_avg (numbers) {
    for (number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

let ress = make_avg([1,2,3,4,5]);
console.log(ress)




/*Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */


function count_zero(binaryString) {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}


console.log(count_zero("101010")); // Output: 3
console.log(count_zero("1111"));   // Output: 0
console.log(count_zero("0000"));   // Output: 4



// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd



function evenOdd (num) {
    if (num % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }

    return num;
}

let evenOrOdd = evenOdd(4);
console.log(evenOrOdd);