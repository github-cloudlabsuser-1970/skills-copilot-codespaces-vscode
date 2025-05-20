function reverseSentence(sentence) {
  // Reverse the sentence, capitalize the first letter
  const reversed = sentence.split('').reverse().join('');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
}

// Example usage:
const input = 'Hello world!';
console.log(reverseSentence(input)); // Output: '!dlrow olleh'

const data = [
[
   { name: 'John', age: 25 },
   { name: 'Jane', age: 30 }
],
[
   { name: 'Bob', age: 40 }
]
];

// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flat().map(obj => obj.name);
console.log(names);