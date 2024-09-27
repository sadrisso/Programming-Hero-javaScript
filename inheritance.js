
class Vechile {
    constructor(name, price,) {
        this.name = name;
        this.price = price;
    }

    move(speed) {
        console.log(`${this.name} moving... ${speed}`)
    }
}

class Bus extends Vechile {
    constructor(name, price, seats) {
        super(name, price)
        this.seats = seats;
    }
}

class Truck extends Vechile {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}

const toyota = new Vechile("Toyota", 500000);
const shyaloli = new Bus("Shyamoli", 1000000, 30);
const tata = new Truck("tata", 2000000, "100Ton");

console.log(toyota, shyaloli, tata)
console.log(toyota.move("100km/hr"), shyaloli.move("150km/hr"), tata.move("60km/hr"));