// ===============================
// TASK 1 – Custom Digital Clock
// Create a live digital clock using:
// - new Date()
// - getHours()
// - getMinutes()
// - getSeconds()
// - setInterval()
// Format:
// Current Time: 14 : 05 : 09
// (Add leading zero if value < 10)
// ===============================

function updateClock() {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
}

setInterval(updateClock, 1000);
updateClock();


// ===============================
// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday
// ===============================

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();

console.log("Today is " + days[today.getDay()]);


// ===============================
// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23
// ===============================

const birthYear = 2003;
const currentYear = new Date().getFullYear();

console.log(`Your age is ${currentYear - birthYear}`);


// ===============================
// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:
// - new Date()
// - setFullYear()
// - setMonth()
// - setDate()
// - setHours()
// - setMinutes()
// - setSeconds()
// Print using:
// toLocaleString()
// ===============================

const customDate = new Date();

customDate.setFullYear(2020);
customDate.setMonth(7);   
customDate.setDate(15);
customDate.setHours(10, 30, 45);

console.log(customDate.toLocaleString());


// ===============================
// SECTION 2 – setTimeout & setInterval
// ===============================


// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen ■

setTimeout(() => {
    console.log("Welcome Naveen ■");
}, 3000);


// ===============================
// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:
// - setInterval()
// - clearInterval()
// ===============================

let count = 1;

const timer = setInterval(() => {
    console.log(count);

    if (count === 5) {
        clearInterval(timer);
        console.log("Stopped");
    }

    count++;
}, 1000);


// ===============================
// TASK 7 – Simple Promise
// If number > 10 → resolve("Valid number")
// Else → reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()
// ===============================

const number = 15;

const checkNumber = new Promise((resolve, reject) => {
    number > 10 ? resolve("Valid number") : reject("Invalid number");
});

checkNumber
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log("Promise completed"));


// ===============================
// SECTION 4 – Fetch API Task
// ===============================


// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>
// -----------------

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
        products.forEach(({ title, price }) => {
            console.log("Product:", title);
            console.log("Price:", price);
            console.log("-----------------");
        });
    })
    .catch(err => console.log("Error:", err));


// ===============================
// SECTION 5 – Execution Order Task
// ===============================


// function one(){
// console.log("one");
// }
// function two(){
// console.log("two");
// }
// function three(){
// console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why.

function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

one();
setTimeout(two, 0);
three();

// Output:
// one
// three
// two
// Reason:
// setTimeout is asynchronous and executed after the call stack is empty
