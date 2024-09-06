
const friends = ['Elon', 'Burg', 'Bill', 'Waren'];

for (const friend of friends) {
    console.log(friend);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(friends[i]);
}


// Array looping tasks...



/*
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);




/*
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/



const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);



/*
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/


var numberss = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenatedString = '';

for (const name of numberss) {
  concatenatedString += name;
}

console.log(concatenatedString);



/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/


const statement = 'I am a hard working person';
const words = statement.split(' ');
let reversedWords = '';

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords += words[i] + ' ';
}

console.log(reversedWords.trim());
