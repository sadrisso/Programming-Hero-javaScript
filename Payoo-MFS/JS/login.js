

document.getElementById("btn-login").addEventListener("click", function (e)
{
    e.preventDefault();
    console.log("clicked");

    const inputPhone = document.getElementById("input-phone").value;
    const inputPin = document.getElementById("input-pin").value;

    if (inputPhone === "5" && inputPin === "1234") {
        console.log("Logged in");
        window.location.href = "home.html";
    }
    else {
        alert("Wrong input..!")
    }
});