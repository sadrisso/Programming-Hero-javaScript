

function calculateTax(income, expense)
{
    if (typeof income && expense !== "number" && expense > income) {
        return "Invalid input!";
    }

    let profit = income - expense;
    let tax = profit * 0.20;

    return tax;
}



function sendNotification (email)
{
    if (!email.includes("@")) {
        return "Invalid Email";
    }

    const arr = email.split('@');
    const notification = arr[0] + " sent you an email from " + arr[1];

    return notification;
}



function checkDigitsInName(name)
{
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


function calculateFinalScore(obj)
{
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




function  waitingTime(waitingTimes  , serialNumber)
{
    if (typeof waitingTimes !== "array" && typeof serialNumber !== "number") {
        return "Invalid Input"
    }

    let sum = 0;
    for (time of waitingTimes) {
        sum += time;
    }

    const avgTime = sum / waitingTimes.length;
    const remainingCandidate = serialNumber - waitingTimes.length -1;
    const timeLeft = Math.round(remainingCandidate * avgTime);

    return timeLeft;
}
