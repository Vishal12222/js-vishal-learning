const user = {
    username : "Vishal",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // nothing
    }
}

// user.welcomeMessage() // Vishal , welcome to website
// user.username = "Akshay"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "vishal"
//     console.log(this.username);
// }

// chai() // undefined

// let's discuss more how to declare functions specailly through araay functions

// const chai = function () {
//     let username = "Vishal"
//     console.log(this.username);  // undefined
// }

// chai()

const chai =  () => {
    let username = "Vishal"
    console.log(this.username);  // undefined
    console.log(this); // {}
}

// chai()

// () => {}  Basic function of arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2 // Explicit return 
// }

// console.log(addTwo(3, 4)); // 7

//implicit return means don't need to write return keyword if this is confusing then use line number 55

//const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(3, 4)) // 7


// if we write () inside parantheses then don't need to write return keyword
// const addTwo = (num1, num2) => (num1 + num2) 

// How to return object
const addTwo = (num1, num2) => ({username: "vishal"})

// console.log(addTwo(3, 4))