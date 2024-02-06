const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // many of us assuming this array is merging but this array not merged this gives output like this
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  ||  (Array inside Array)

// console.log(marvel_heros[3][1]); // this is not right syntax if you want flash's value

//we can use concat also
const allHeros  = marvel_heros.concat(dc_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);


// We can use spread operator this is very easy way

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// this is very rare case but Interview Perception it is very IMP

const another_array = [1,2,3, [4,5,6],7, [6, 7, [4, 5]] ]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//Output
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

console.log(Array.isArray("Vishal")); // we ask this is array  false
//but if you want to convert this array how to convert let's see
// console.log(Array.from("Vishal")); // this creates a Array  [ 'V', 'i', 's', 'h', 'a', 'l' ]

// console.log(Array.from({name: "Vishal"})); // Interesting []

//if you have multiple values and you want to convert them into array then we use of

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]

//Learn more about isArray , from and of