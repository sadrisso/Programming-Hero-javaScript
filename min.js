const phonePrice = [10000, 20000, 33200, 543300, 20111, 10500, 95000, 9999];

function getMinPrice(prices) {
    let min = prices[5];

    for (let price of prices) {
        if (price < min) {
            min = price;
        }
    }
    return min;
}

const result = getMinPrice(phonePrice);
console.log(result);