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