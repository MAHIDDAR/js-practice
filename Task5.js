// TASK 1 – Employee Merge System (Spread Operator)

// You have:
// let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
// let empPromotion = { role: "Developer", bonus: 10000 }
//
// Requirements:
// 1. Merge both objects using spread.
// 2. Update salary to 40000.
// 3. Add new property: experience: "2 years"
// 4. Print final employee object.

// Ans :
let empBasic = { 
  name: "Naveen", 
  role: "Trainee", 
  salary: 20000 
};

let empPromotion = { 
  role: "Developer", 
  bonus: 10000 
};

let finalEmployee = {
  ...empBasic,
  ...empPromotion,
  salary: 40000,
  experience: "2 years"
};

console.log(finalEmployee);

// TASK 2 – Shopping Cart (Spread + Array)

// let cart1 = ["Shoes", "Shirt"]
// let cart2 = ["Watch", "Cap"]
//
// Requirements:
// 1. Merge both carts.
// 2. Add "Bag" at the end.
// 3. Add "Socks" at the beginning.
// 4. Print final cart.
// Ans :
let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];

let finalCart = ["Socks", ...cart1, ...cart2, "Bag"];

console.log(finalCart);



// TASK 3 – Rest Operator Salary Calculator

// Create function:
// calculateTotalSalary(baseSalary, ...bonuses)
//
// Requirements:
// 1. Add all bonus values.
// 2. Return total salary.
// 3. Example:
// calculateTotalSalary(30000, 2000, 3000, 5000)
// Expected Output: Total Salary: 40000
// Ans :
  function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = bonuses.reduce((sum, bonus) => sum + bonus, 0);
  return baseSalary + totalBonus;
}

let totalSalary = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", totalSalary);

// TASK 4 – Advanced Destructuring

// let student = {
// name: "Rahul",
// marks: { maths: 90, science: 85, english: 88 }
// }
//
// Requirements:
// 1. Destructure name.
// 2. Destructure maths and science.
// 3. Print:
// Rahul scored 90 in maths and 85 in science
// Ans :
  let student = {
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
};

let { name, marks: { maths, science } } = student;

console.log(`${name} scored ${maths} in maths and ${science} in science`);

// TASK 5 – Array Manipulation

// let numbers = [10,20,30,40,50]
//
// Requirements:
// 1. Remove 30 using splice.
// 2. Add 25 in its place.
// 3. Reverse array.
// 4. Check if 50 exists.
// 5. Print final array.
// Ans :
  let numbers = [10, 20, 30, 40, 50];

// 1 & 2. Remove 30 and add 25 in its place
numbers.splice(2, 1, 25);

// 3. Reverse the array
numbers.reverse();

// 4. Check if 50 exists
let hasFifty = numbers.includes(50);

// 5. Print final results
console.log("Final Array:", numbers);
console.log("50 exists:", hasFifty);


// TASK 6 – Flatten Data

// let apiData = [1,2,[3,4,[5,6,[7,8]]]]
//
// Requirements:
// 1. Convert into single array.
// 2. Print output.
// 3. Find index of 6.
// Ans :
  let apiData = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let flatArray = apiData.flat(Infinity);

console.log("Flattened Array:", flatArray);

let indexOfSix = flatArray.indexOf(6);
console.log("Index of 6:", indexOfSix);

// TASK 7 – Sorting Problem

// let prices = [100, 5, 25, 300, 45]
// Requirements:
// 1. Sort in ascending order properly.
// 2. Sort in descending order properly.
// (Note: Use compare function)
// Ans :
  let prices = [100, 5, 25, 300, 45];

let ascending = [...prices].sort((a, b) => a - b);

let descending = [...prices].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);


// BONUS HARD TASK – Team Level

// let users = [
// {name: "A", salary: 20000},
// {name: "B", salary: 40000},
// {name: "C", salary: 30000}
// ]
//
// Requirements:
// 1. Increase everyone salary by 5000 using spread.
// 2. Return new updated array.
// 3. Sort based on salary (high to low).
// Ans :
  let users = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
];

let updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 5000
}));

let sortedUsers = [...updatedUsers].sort((a, b) => b.salary - a.salary);

console.log(sortedUsers);

