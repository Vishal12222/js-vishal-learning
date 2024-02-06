// const tinderUser = new Object()  {}

const tinderUser = {} // {}

tinderUser.id = "1234abc"
tinderUser.name = "Vishal"
tinderUser.isLoggedIn = false
// { id: '1234abc', name: 'Vishal', isLoggedIn: false }

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Vishal",
            lastname : "Pahare"
        }
    }
}


// ? this is called optional chaining if fullname? not exit then ? this is for protection
// console.log(regularUser.fullname?.userfullname.firstname); // Vishal

const obj1 = {1: "a",  2:"b"}
const obj2 = {3: "c",  4:"d"}
const obj3 = {5: "e",  6:"f"}

const obj4 = Object.assign({}, obj1, obj2 , obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj5 = {...obj1, ...obj2, ...obj3} // this is called spread operartor
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//if value comes from database then we use this

const users = [
        {
        id: 1,
        email: "v@gmail.com"
        },
        {
        id: 2,
        email: "k@gmail.com"
        },
        {
        id: 3,
        email: "p@gmail.com"
        }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '1234abc', 'Vishal', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '1234abc' ], [ 'name', 'Vishal' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true (hasOwnProperty checks property exist or not)

console.log(tinderUser.hasOwnProperty('isLogged'));  // false  (hasOwnProperty checks property exist or not)
