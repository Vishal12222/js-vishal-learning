// singleton
// object.create

// this is object literals

const mySym = Symbol("key1")


const JsUser = {
    "fullname" : "Vishal Pahare",
    name : "Vishal",
    age : 23,
    [mySym] : "mykey1",
    location : "Mumbai",
    email : "vishal@gmail.com",
    isLoggenIn : false,
    LastLoginDays : ["Monday", "Saturday" , "Sunday"]
}

//how to access objects

// console.log(JsUser.email) //vishal@gmail.com   || Both are providing same output 
// console.log(JsUser["fullname"]) // vishal@gmail.com || But this is very helpful
// console.log(JsUser[mySym])


//If you want change email
JsUser.email = "vishal@chatgpt.com"
//Object.freeze(JsUser) // if we use freeze then the value not change
JsUser.email = "vishal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.fullname}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());