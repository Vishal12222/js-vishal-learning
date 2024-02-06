const name="Vishal"
const repocount = 15

//console.log(name + repocount + " value");

//this is string interpolation this is the morden way 
//this syntax is more readable more relaible
//we can done things on the way means uppercase etc.
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// another way to declare string
const gameName = new String('Vishal-Keshav-Pahare')

// console.log(gameName.split('-')); // [ 'Vishal', 'Keshav', 'Pahare' ]

// console.log(gameName[0]); // V
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase()); // VISHAL
// console.log(gameName.length); // 6
// console.log(gameName.charAt(2)); // s
// console.log(gameName.indexOf('s')); // 2


//we don't allow to give negative values in substring
// const newString = gameName.substring(0, 4) //Vishal => Vish 
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStrinOne = "    Vishal   "
console.log(newStrinOne);
console.log(newStrinOne.trim());

const url = "https://vishal.com/vishal%20pahare"

console.log(url.replace('%20', '-')); // https://vishal.com/vishal-pahare
console.log(url.includes('vishal')); // true
console.log(url.includes('golu')); // false


