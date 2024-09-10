

function calculateTax(income, expense) {
    if (expense > income) {
        return "Invalid input!";
    }

    let profit = income - expense;
    let tax = profit * 0.20;

    return tax;
}



function sendNotification (email) {

    const arr = email.split('@');

    const notification = arr[0] + " sent you an email from " + arr[1];
    return notification;
}




function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    for (let i = 0; i <= name.length; i++) {
        if (!isNaN(name[i])) {
            return true;
        }
    }

    return false;
}



function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    }

    let totalMarks = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        totalMarks += 20;
    }
    else {
        totalMarks = totalMarks;
    }

    if (totalMarks >= 80) {
        return true;
    }
    else {
        return false;
    }
}


const result = calculateFinalScore({name: "Rakib", testScore: 40, schoolGrade: 20, isFFamily: true});
console.log(result)