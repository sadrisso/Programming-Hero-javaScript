

document.getElementById("add-money-btn").addEventListener("click", function (e)
{
    e.preventDefault();
    console.log("Add money btn clicked")

    const amountNumber = document.getElementById("amount-input").value;
    const pinNumber = document.getElementById("pin-input").value;
    let mainAmount = document.getElementById("main-amount").innerText;

    console.log(amountNumber, pinNumber, mainAmount)

    if (pinNumber === "1234") {
        mainAmount += amountNumber;
        mainAmount.innerText = mainAmount;
    }
    else {
        alert("Worng!")
    }
})