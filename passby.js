//for premetiv type..
//primitive data types are pass by value..
const num1 = 10;
const num2 = 10;

function add (x, y) {
    x = 20;
    y = 20;
    const result = x +y;
    return result
}

console.log("No change in the premetive data type")
console.log(num1, num2)
add(num1, num2)
console.log(num1, num2)



//for non premetive data type...
//non-primitive data types are pass by referance..
const student1 = {name: "Rahim", partner: "Sumaiya"}
const student2 = {name: "Rihan", partner: "Neha"}

function movie (couple1,  couple2) {
    couple1.name = "Rohan"
    couple2.name = "Rahul"
}

console.log("Changed in the non-premetive data..")
console.log(student1, student2)
movie(student1, student2)
console.log(student1, student2)