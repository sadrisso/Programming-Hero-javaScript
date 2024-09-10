
function calculateTax(income, expense) {
    if (expense > income) {
        return "Invalid input!";
    }

    let profit = income - expense;
    let tax = profit * 0.20;

    return tax;
}

