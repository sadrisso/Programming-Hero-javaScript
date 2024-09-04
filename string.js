// Count how many times a string has the letter a

let count = 0;

let str = "Bangladaaesh";

for(let s of str) {
    if(s === 'a') {
        count++;
    }
}

console.log(count)



let cnt = 0;
let sttr = "America";

for (let l of sttr) {
    if (l === 'a' || l === 'A') {
        cnt++;
    }
}

console.log(cnt);



// Check whether a string contains all the vowels a, e, i, o, u


let string = "My name is drisso";
let voule = 0;

for (let strr of string) {
    if (strr === 'a' || strr === 'e' || strr === 'i' || strr === 'o' || strr === 'u') {
        voule++;
    }
}

console.log(voule);



// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


let strrr = "eXample string with x and X";
strrr = strrr.replace(/x/g, 'y').replace(/X/g, 'Y');

console.log(str);
