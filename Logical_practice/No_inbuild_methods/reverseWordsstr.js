//Reverse each word in a sentence (but not the sentence itself).
const str = 'helo how are you';
let word = '';
let newStr = '';

for (let i = 0; i <= str.length; i++) {

  if (str[i] === ' ' || i === str.length) {

    for (let j = word.length - 1; j >= 0; j--) {
      newStr += word[j];
    }

    newStr += ' ';
    word = '';

  } else {
    word += str[i];
  }
}

console.log(newStr);