// ==========================================
// SECTION 1 – Array Higher Order Methods
// ==========================================

// // let subjects = ["Maths", "Science", "English", "History"]
// Task 1 – forEach()
// Use forEach()
// Print: Subject 1: Maths ... Subject 4: History
// Store result in a variable
// Why does forEach() return undefined?

let subjects = ["Maths", "Science", "English", "History"];
let output = "";

subjects.forEach((sub, index) => {
  output += `Subject ${index + 1}: ${sub}\n`;
});

console.log(output);
// forEach returns undefined because it does not return a new array.


// ------------------------------------------

// Task 2 – map()
// let prices = [100, 200, 300, 400];
// Add 10% GST
// Return new array
// Expected Output: [110, 220, 330, 440]

let prices = [100, 200, 300, 400];

let newPrices = prices.map(price => price * 1.10);

console.log(newPrices);


// ------------------------------------------

// Task 3 – filter()
/*let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
]*/
// Get students scoring above 50
// Print filtered array

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];

let passedStudents = students.filter(student => student.marks > 50);

console.log(passedStudents);


// ------------------------------------------

// Task 4 – find() Practice
// Use same students array
// Requirements:
// * Use find()
// * Find first student scoring above 50
// * Print that object
// * Question: Difference between filter() and find()?

let students1 = [
    { name: "A", marks: 45 },
    { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
];

let topStudent = students1.find(function(student) {
    return students1.marks > 50;
});

console.log(topStudent);


// ------------------------------------------

// Task 5 – reduce()
/*let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
]*/
// Calculate total price
// Bonus: Add 5% tax inside reduce()

let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let totalPrice = cart.reduce((acc, item) => acc + item.price * 1.05, 0);

console.log(totalPrice);


// ------------------------------------------

// Task 6 – some()
// let numbers = [1, 3, 5, 7, 8]
// Check if at least one number is even
// Output: true

let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);


// ------------------------------------------

// Task 7 – every()
//let ages = [22, 25, 19, 30]
// Check if all ages are above 18

let ages = [22, 25, 19, 30];

let allAdults = ages.every(age => age > 18);

console.log(allAdults);


// ------------------------------------------

// Task 8 – sort()
// let salaries = [50000, 10000, 70000, 30000]
// Sort ascending
// Sort descending
// Explain why normal sort() fails for numbers

let salaries = [50000, 10000, 70000, 30000];

let ascending = [...salaries].sort((a, b) => a - b);
console.log(ascending);

let descending = [...salaries].sort((a, b) => b - a);
console.log(descending);
// explanation :
// Normal sort fails because it sorts numbers as strings.


// ------------------------------------------

// Task 9 – Array Conversion
// let arr = [10, 20, 30, 40]
// Convert using toString()
// Convert using join("-")
// Expected Output: 10-20-30-40

let arr = [10, 20, 30, 40];

console.log(arr.toString());
console.log(arr.join("-"));


// ==========================================
// SECTION 2 – String Methods
// ==========================================


// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Get character at index 4
// Get ASCII value

let word = "Developer";

console.log(word.charAt(4));
console.log(word.charCodeAt(4));


// ------------------------------------------

// Task 11 – slice()
// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany";

console.log(company.slice(7));


// ------------------------------------------

// Task 12 – Case Conversion
// let userInput = "javaScript"
// Convert to uppercase
// Convert to lowercase

let userInput = "javaScript";

console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());


// ------------------------------------------

// Task 13 – trim()
// let email = " naveen@gmail.com "
// Remove unwanted spaces

let email = " naveen@gmail.com ";

console.log(email.trim());


// ------------------------------------------

// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exists

let message = "Welcome to JavaScript Training";

console.log(message.includes("JavaScript"));


// ------------------------------------------

// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home";

console.log(movie.split("-"));


// ------------------------------------------

// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// Find first index of 'm'
// Find last index of 'm'

let text = "programming";

console.log(text.indexOf("m"));
console.log(text.lastIndexOf("m"));


// ------------------------------------------

// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python";

console.log(tech.replace("python", "javascript"));


// ------------------------------------------

// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// Check if starts with "report"
// Check if ends with ".pdf"

let filename = "report.pdf";

console.log(filename.startsWith("report"));
console.log(filename.endsWith(".pdf"));


// ------------------------------------------

// Task 19 – repeat()
//let star = "*"
// Print 10 stars using repeat()

let star = "*";

console.log(star.repeat(10));


// ============================================
// END OF FILE
// ==========================================
