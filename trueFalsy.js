const x = '0';

if (x) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

const y = null;

if (y) {
    console.log("Truthy")
}
else {
    console.log("Falsy")
}

const z = undefined;

if (z) {
    console.log("Truthy")
}
else {
    console.log("Falsy")
}

const m = false;

if (m) {
    console.log("Truthy")
}
else {
    console.log("Falsy")
}


const isTrue=true;
console.log(!isTrue ? "hello" : "world")


const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);