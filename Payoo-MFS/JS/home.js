

document.getElementById("add-money-btn").addEventListener("click", function (e)
{
    e.preventDefault();
    console.log("Add money btn clicked")

    const amountNumber = document.getElementById("amount-input").value;
    const pinNumber = document.getElementById("pin-input").value;
    let mainAmount = document.getElementById("main-amount").innerText;

    let newBalance = parseInt(mainAmount) + parseInt(amountNumber);

    if (pinNumber === "1234") {
        document.getElementById("main-amount").innerText = newBalance
    }
    else {
        alert("Invalied pin...")
    }

})