
/*
Write a program to check two numbers and return true if one of the number is greter then 100 or if sum of the two numbers is 100
*/


function checkNumbers (num1, num2) {

    let sum = 0;

    if (num1 >= 100 || num2 >= 100) {
        return true;
    }
    else {
        sum = sum + num1 + num2;
    }

    if (sum >= 100) {
        return true + " Sum is bigger then 100!";
    }
    else {
        return false + " Sum is also less then 100!!";
    }
}

const result = checkNumbers(6,400);
console.log(result);


// Write a program to check the file extension name

function checkFileExt (str) {
    const newStr = str.slice(str.lastIndexOf('.'));
    console.log(newStr)
}

checkFileExt("index.js");
checkFileExt("index.py");