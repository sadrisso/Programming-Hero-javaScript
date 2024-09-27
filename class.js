
class Student {
    constructor(name, id, section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }

    sleep(time) {
        return (`${this.name} sleep at ${time}`)
    }
}


const neha = new Student("neha", 1, "B");
const siam = new Student("siam", 2, "C");


console.log(neha, neha.sleep(10));
console.log(siam, siam.sleep(11));