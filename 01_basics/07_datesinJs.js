// Dates

let myDate = new Date()
// console.log(myDate); // 2024-02-06T09:49:56.469Z this is not readable
// console.log(myDate.toString()); // Tue Feb 06 2024 09:50:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Feb 06 2024
// console.log(myDate.toISOString()); // 2024-02-06T09:52:09.645Z
// console.log(myDate.toJSON()); // 2024-02-06T09:52:31.536Z
// console.log(myDate.toLocaleString()); // 2/6/2024, 9:53:16 AM
// console.log(myDate.toLocaleDateString()); // 2/6/2024

// console.log(typeof myDate); // object

// let mycreatedDate = new Date(2024, 0, 24) // (without toDateString()) 2024-01-24T00:00:00.000Z | ( with toDateString()) Wed Jan 24 2024
// let mycreatedDate = new Date(2024, 0, 24 , 5, 3) // 1/24/2024, 5:03:00 AM
// let mycreatedDate = new Date("2024-01-14") // 1/14/2024, 12:00:00 AM (this is YY MM DD) in india we dont follow this syntax
let mycreatedDate = new Date("01-14-2024") // 1/14/2024, 12:00:00 AM
// console.log(mycreatedDate.toLocaleString()); // 

let myTimeStamp = Date.now() // 1707214147849
// console.log(myTimeStamp); 
// console.log(mycreatedDate.getTime()); // 1705190400000

//you want to convert milliseconds into seconds 
// console.log(Math.floor(Date.now()/1000)); // 1707214319

let newDate = new Date()
console.log(newDate); // 2024-02-06T10:12:58.205Z

//i want only month
console.log(newDate.getMonth() + 1); //2 (for exact values we use +1)
//i want only Day
console.log(newDate.getDay()); //2

newDate.toLocaleString('default',{
    weekday:"long"
})