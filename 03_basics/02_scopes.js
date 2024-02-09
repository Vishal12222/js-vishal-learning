// let a = 10     // 10
// const b = 30  // 30
// var c = 20 // var not work in scope // 20

{}  // this is scope

// var c = 300   // this is global scope

let a = 300

if (true) {  // this is block scope line number 9 to 15 || we want this values inside scopes only
    let a = 10   
    const b = 20
    var c = 30
    //console.log("Inner: ",a); // this prints 10 because we print this inside scope, output // Inner:  10
   // c = 30 // if we print this this also gives output, 30 that's why we avoid var
    
}

// console.log(a);  // giving error because a is inside scope of if block  |error| - a is not defined
// console.log(b);  // // giving error because a is inside scope of if block  |error| - b is not defined

// console.log(c); 
// but when i print c it prints 30 that is the problem that's why we don't use var|
// again i print this because i declared this time var c = 300 at line number 7 

// console.log(c); // it gives me output 30 // 
// programmer says i declare 300 why it prints 30 there is problem when many programmers code in one program then this happens

// console.log(a); // this gives me output 300 because i print outside the if scope. ( referes line number 15.)

// Remember
// When we check scope in website's console then the scope is different and when we run program through node then scope is different.

// ************************************ nested scope *******************************************
function one() {
    const username = "Vishal"

    function two() {
        const website = "You tube"
       // console.log(username);
    }
    // console.log(website); // it gives error (ReferenceError: website is not defined) because we access it outside the scope
    //that's why two does not execute because here is line by line execution process.

    two() // two executes and inside two we have |line number :41 |console.log(username); //vishal
}

one()

if (true) {
    const username = "Vishal"
    if (username === "Vishal") {
        const website = " youtube"
       // console.log(username + website); // Vishal youtube
    }
}

// *********************************** Interesting **************************************

console.log(addOne(5)); // Output 6 // we can run this type also

function addOne(num) {
    return num + 1
}


// addTwo(5) // (ReferenceError: Cannot access 'addTwo' before initialization) because in this function we add and declare also hold into addTwo
//this is hoisting in javascript where function is declared and where function executed execution context

const addTwo = function(num){
    return num + 2
}

