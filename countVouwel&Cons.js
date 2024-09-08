

 function vowelCount (str) {
    const vowel = "aeiou";
    let count = 0;

    str = str.toLowerCase()

    for (letter of str) {
        if (vowel.includes(letter)) {
            count++;
        }
    }
    return count;
 }

 const result = vowelCount("aeiou");
 console.log(result);