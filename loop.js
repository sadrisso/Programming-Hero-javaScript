let fruits = ["apple", "Orange", "Banana", "Goava", "WaterMelon"];

for (let fruit of fruits) {
    console.log(fruit);
    console.log("I want to eat");
}



/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */


let count = 0;

while (count <= 5) {
    console.log("I will invest at lease six hrs every single day for next sixty days");
    count++;
}




/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


let i = 61;

while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i++;
}


let j = 78;

while (j <= 98) {
    if (j % 2 === 0) {
        console.log(j)
    }
    j++;
}




/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */



let sum = 0;
let k = 81;

while (k <= 131) {
    if (k % 2 !== 0) {
        sum += k;
    }
    k++;
}

console.log(sum);


let l = 206;

while (l <= 311) {
    if (l % 2 == 0) {
        sum += l;
    }
    l++;
}

console.log(sum);



/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


let number = 5;
let a = 0;

while (a <= 5) {
    console.log(number + "x" + a + "=" + number*a);
    a++;
}


/***

Implement a countdown timer that counts down from 21 to 15.

 */


let cnt = 21;

while (cnt >= 15) {
    console.log(cnt)
    cnt--;
}



let m = 0;

for (let f = 0; f <= 10; f++) {
    console.log(f);
    if (f === 5) {
        break;
    }
}


for (let g = 0; g <= 10; g++) {
    if (g % 2 == 0) {
        continue;
    }
    console.log(g)
}


while (m <= 10) {
    m++;
    if (m === 10) {
        continue;
    }
    console.log(m);
}



/*

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

let b = 0;

while(b <= 200) {
    if (b === 50) {
        break;
    }
    console.log(b)
    b++;
}

// for (let c = 0; c <= 200; c++) {
//     if (c === 100) {
//         break;
//     }
//     console.log(c)
// }



/*
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let summ = 0;
let num = 10;

while (num <= 100) {
    summ += num;
    if (summ >= 100) {
        break;
    }
    num++;
}

console.log(summ)



/*
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


for (let u = 1; u <= 40; u++) {
    if (u % 2 !== 0) {
        continue;
    }
    console.log(u)
}




/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let k = 55; k <= 85; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        continue;
    }
    console.log(k)
}