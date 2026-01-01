const name = "Daksh"
const repoCount = 5

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('daksh-ad-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


 console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   daksh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://abcd.com/ab%20cd"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('ab'))

// console.log(gameName.split('-'));