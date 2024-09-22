document.getElementById("cash-out-btn").addEventListener("click", function (e)
{
    e.preventDefault();

    let amountNumber = document.getElementById("cash-out-amount").value;
    let cashOutPin = document.getElementById("cash-out-pin").value;
    let mainAmount = document.getElementById("main-amount").innerText;

    let newBalance = parseFloat(mainAmount) - parseFloat(amountNumber);

    if (cashOutPin === "1234") {
        document.getElementById("main-amount").innerText = newBalance;
    }
    else {
        console.log("...")
    }

});