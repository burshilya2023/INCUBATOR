// !Stop gninnipS My sdroW!(6kyu)
function spinWords(string) {
    // Split the string into words
    const words = string.split(' ');
  
    // Iterate through each word and reverse if it has five or more letters
    const reversedWords = words.map(word => (word.length >= 5 ? word.split('').reverse().join('') : word));
  
    // Join the reversed words back into a string
    return reversedWords.join(' ');
  }
  
  // Examples
  console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
  console.log(spinWords("This is a test")); // "This is a test"
  console.log(spinWords("This is another test")); // "This is rehtona test"
  