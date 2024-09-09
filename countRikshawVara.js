

function countRikshawVara (people) {
    const bus = 50;
    const micro = 15;
    const risshawCost = 20;

    const remainingAfterBus = people % bus;
    const remainingAfterMicro = remainingAfterBus % micro;
    const rikshawVara = remainingAfterMicro * risshawCost;

    return rikshawVara;
}

console.log("Rikshaw cost :", countRikshawVara(236));