

function add (num1, num2 = 0) {
    const sum = num1 + num2;
    console.log(num1, num2 + "=" + sum);
}

add(6,5);
add(2);


function fullName (first, last = "") {
    const name = first + " " + last;
    console.log(name)
}

fullName("Shoeb", "Akter");
fullName("Drisso");