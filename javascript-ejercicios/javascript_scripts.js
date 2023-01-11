const isEven = (num) => (num%2===0)

const countLetters = (word) => {
    let result = word.replace(/ /g, "");
    return result.length;
}
const reverseWord = (word) => (word.split("").reverse().join(""))

const isPalindrome = (word) =>(word===reverseWord(word))

console.log("Es Par: " + isEven(10));
console.log("Cuantas letras tiene neuquen: " + countLetters("neuquen"));
console.log("Alakran pero al revez: " + reverseWord("Alakran"));
console.log("Neuquen es Palindromo: " + isPalindrome("neuquen"));