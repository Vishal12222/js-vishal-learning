//array

const myArr = [0,1,2,3,4,5] // [ 0, 1, 2, 3, 4, 5 ]

const myHeros = ["Shaktiman","Naagraaj","Thor","Batman"] // [ 'Shaktiman', 'Naagraaj', 'Thor', 'Batman' ]

// console.log(myHeros[2]); // Thor 

// Array methods
// myArr.push(6) //[
    0, 1, 2, 3,
    4, 5, 6
//  ] 
// myArr.pop() // [ 0, 1, 2, 3, 4, 5 ] (Removes last element from array)

// myArr.unshift(9) //( Changes first value of Array)
// [
//     9, 0, 1, 2,
//     3, 4, 5
//   ]

//myArr.shift() //  ( Removes first Value from Array)[ 1, 2, 3, 4, 5 ]
// console.log(myArr); 

// console.log(myArr.includes(9)); // false ( Checks Value existing in Array or not)
// console.log(myArr.includes(4)); //true

// console.log(myArr.indexOf(5)); // 5
// console.log(myArr.indexOf(9)); // if not existing then returns -1

// const newArr = myArr.join() 

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ] 
// console.log(newArr); // 0,1,2,3,4,5 why not in array ? because join converts it into string

// console.log(typeof newArr); // bind also and converts into string

// ++++++++++++++++++++++++++++++++++++++
// Slice and Splice you heard this lots of time

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// OUTPUT
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]

// Splice portion removes when we use splice