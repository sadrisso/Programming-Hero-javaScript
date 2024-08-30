
// JavaScript first module practice taks

/*
Problem-1 : You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300
*/

var myTaka = 1000;
var applePrice = 400;
var orangePrice = 300;
var sumOfPurchase = applePrice + orangePrice
var myCost = myTaka - sumOfPurchase

console.log("Sum of the amount I had purchased is :", sumOfPurchase)
console.log("My total cost is :", myCost)



/*
Problem-2 : Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/


var biology = 40;
var chemistry = 55;
var bangla = 66;
var physics = 90;

var totalMarks = biology + chemistry + bangla + physics;
var numberOfSub = 4;

var avg = totalMarks / numberOfSub;

console.log("Average marks of the student is : ", avg);



/*
Problem-3 : You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
*/


var input = 223;
var remainder = input % 5;
console.log("Reminder is : ", remainder);



/* What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers. */


var a = "11";
let c = parseInt(a);
console.log(c)

var b = isNaN(2-10);

console.log(a, b)