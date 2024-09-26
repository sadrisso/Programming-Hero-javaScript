
const person = {
    name: "halum",
    age: 22,
    occupassion: "farmar"
}

const {name, age, occupassion} = person;
console.log(name, age, occupassion);


const numbers = [1,2,32,44];
const [x,y,z,p] = numbers;

console.log(x,p);



function doubleThem (y, z) {
    return [y*2, z*2];
}

const [prothom, ditiyo] = doubleThem(2,3);
console.log(ditiyo)



const student = {
    id: 111,
    subject: "Math",
    section: "B",
    class: 10
}

// delete student.class;
const {id, ...rest} = student;
console.log(student)
console.log(rest)

const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);

console.log(keys, values, entries)