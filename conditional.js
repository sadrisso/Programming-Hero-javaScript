/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;

if(burgerPrice > 500) {
    console.log("You got free coke!!")
} else {
    console.log("Coke price 30tk only..")
}


/***

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 55;
let height = 175;
let BMI = weight / height**2;
console.log(BMI);

if (BMI < 18.5) {
    console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight");
} else {
    console.log("You are obese");
}



/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


var studentMark = 50;

if (studentMark >= 90 && studentMark <= 100) {
    console.log("A")
} else if (studentMark >= 80 && studentMark < 90) {
    console.log ("B")
} else if (studentMark >= 70 && studentMark < 80) {
    console.log("C")
} else if (studentMark >= 60 && studentMark < 70) {
    console.log("D")
} else {
    console.log("F")
}




/***

if you get more then 80 then inside your friend score.
    If your friend get more than 80. then go for a lunch.
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note:
use nested if-else-if-else
*/


let myScore = 90;
let myFriendScore = 39;

if (myScore > 80) {
    if (myFriendScore > 80) {
        console.log("Go for a lunch..")
    } else if (myFriendScore < 80 && myFriendScore >= 60) {
        console.log("Good luck next time")
    } else if (myFriendScore < 60 && myFriendScore >= 40) {
        console.log("keep your friend's message unseen.")
    } else if (myFriendScore < 40) {
        console.log("Block")
    }
}




/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result.
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else.

also, write it using ternary operator.

 */


let num1 = 20;
let num2 = 40;
let result;

// if (num1 > num2) {
//     result = num1 * 2;
// } else {
//     result = num1 + num2;
// }

num1 > num2 ? result = num1 * 2 : result = num1 + num2;

console.log("Result value is : ", result)



/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 70;
let student = true;

if (age < 10) {
    ticketPrice = "Free";
} else if (student) {
    ticketPrice = ticketPrice * 50 / 100;
} else if (age >= 60) {
    ticketPrice = ticketPrice * 15 / 100;
} else {
    ticketPrice = 800;
}

console.log(ticketPrice)