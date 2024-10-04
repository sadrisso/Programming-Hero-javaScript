
function checkAge () {
    const inputEl = document.getElementById("input");
    const errorTag = document.getElementById("error")
    const inputText = inputEl.value;

    try {
        const age = parseInt(inputText);

        if (isNaN(age)) {
            throw "Please enter a number";
        }
        else if (age < 18) {
            throw "Baccha not allowed"
        }
        errorTag.innerText = "";
    }
    catch (err) {
        console.log("Error..", err);
        errorTag.innerText = err;
    }

    console.log("After error...")
}