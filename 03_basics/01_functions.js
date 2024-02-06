function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

//sayMyName  (Blank)
//sayMyName()  // V I S H A L

// function addTwoNumbers(number1,number2) { //parameters

//     console.log(number1+number2);
// }


// function addTwoNumbers(number1,number2) { // second way
//        let result = number1+number2

//        console.log("Vishal"); // at this time this will print
//        return result                      // this time in this result's value is 8 (line number 38)

//       // console.log("Vishal");  // this will not execute bydefault function's definations rule is after return function not work
// }

//above 2 ways are right but we have 3rd easy way

function addTwoNumbers(number1,number2) {
    return number1+number2
}

//addTwoNumbers(3,5) // arguments we can store it to a variable

const result = addTwoNumbers(3,5) // this gives me output 8 but when i check the value of result it will undefined

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`
}

// loginUserMessage("Vishal") // It Does not print anything because we dont say that the value store in variable or print the value log

// console.log(loginUserMessage("Vishal")); // Vishal Just logged in
// console.log(loginUserMessage("")); // if someone does not provide value then print  Just logged in
// console.log(loginUserMessage()); // if someone does not provide value "" also not provide then provide  undefined Just logged in we check in early in using if-else


// in e commerce website we don't know parameters then we use rest operator
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,400)); // [ 200, 300, 400 ]

function calculateCartPrice(val1 , val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,400,5000)); // [ 400, 5000 ]

const user = {
    username: "vishal",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // Username is vishal and price is 199
// we can pass direct object like this
handleObject({
    username: "sam",
    price: 399
})

// Username is sam and price is 399 (output)

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray) {
    return getArray[1]
}
 
// console.log(returnSecondValue(myNewArray)); // 300

//we can pass array directly
console.log(returnSecondValue([200,300,400,500])); //300