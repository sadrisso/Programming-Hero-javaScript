
const person1 = {
    name: "Obaydul Kader",
    isFFfamily: true,
    age: 54,
    honours: 40,
    hsc: 30
}

const person2 = {
    name: "Ziaul Kader",
    isFFfamily: false,
    age: 44,
    honours: 50,
    hsc: 40
}


function isQualified (info) {
    if (typeof info !== "object") {
        return "Invalied object";
    }

    let totalMarks = info.honours + info.hsc;

    if (info.isFFfamily) {
        totalMarks += 20;
        info.age -= 10;
    }

    if (totalMarks >= 80 && info.age <= 50) {
        return `You got the job your marks is ${totalMarks} your age is ${info.age}`;
    }
    else {
        return `You failed your age is ${info.age} and your marks is ${totalMarks}`;
    }
}


const result = isQualified(person1)
console.log(result);