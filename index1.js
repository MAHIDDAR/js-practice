/*JavaScript Day 2 Assignment

MAHIDDAR REDDY M
Associate Software Engineer
Topics Covered: Printing Statements, Console Methods, Data Types, Operators, Arrays, Objects
Instructions: No loops. No conditional statements. Only use topics covered in class.
-------------------------------------------------------------------------------------------------------------------------------
1) Welcome Program
- Ask user name using prompt().
- Show alert: Hi , Welcome to JavaScript Training.
- Print the same message in console.
A) let userName = prompt("Please enter your name:"); // prompt for user to enter his name
     let welcomeMessage = "Hi " + userName + ", Welcome to Js Training."; // creating welcome                           msg
    alert(welcomeMessage); // Displaying the msg in alert box
    console.log(welcomeMessage); // printing the msg to bowser console
2) Console Methods Practice
- Print 500 using console.log(), console.warn(), console.error().
- Use console.clear().
A) console.log(500); // Normal Output
    console.warn(500); // Warning Msg
    console.error(500); // Error Msg
   console.clear(); // It clears the console above it
3) Data Type Identification
- Create string, number, boolean, undefined, and null variables.
- Print value and type using typeof.
A) let userName = "Mahiddar";   // String 
     let age = 21;  // Number 
let isStudent = true;  // Boolean 
let city; // Undefined
 let score = null; // Null
console.log(userName, typeof userName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(city, typeof city);
console.log(score, typeof score); // null returns Object
4) Arithmetic Operations
- Use let a = 20 and let b = 5.
- Perform +, -, *, /, %, ** and print results.
A) let a = 20;
    let b = 5;
  // Arithmetic Operations
   console.log("Addition:", a + b);
   console.log("Subtraction:", a - b);
   console.log("Multiplication:", a * b);
   console.log("Division:", a / b);
   console.log("Modulus (%):", a % b);
   console.log("Exponential (**):", a ** b);
5) Increment & Decrement
- Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
- Print variables clearly.
A)// Initial value
console.log("Initial Value:", x);  // Output : 10

// Post-Increment
console.log("Post-Increment (x++):", x++); // Output : 10
// Uses current value, then increments
console.log("Value After Post-Increment:", x); // Output : 11

// Pre-Increment
console.log("Pre-Increment (++x):", ++x);  // Output : 12
// Increments first, then uses the value

// Post-Decrement
console.log("Post-Decrement (x--):", x--);  // Output : 12
// Uses current value, then decrements
console.log("Value After Post-Decrement:", x); // Output : 11

// Pre-Decrement
console.log("Pre-Decrement (--x):", --x);  // Output : 10
// Decrements first, then uses the value
6) Assignment Operators
- Use let num = 10.
- Perform +=, -=, *=, /=, %= and print results.
A) let num = 10;
num += 5;
console.log("After += 5:", num); // Output= 15

num -= 2;
console.log("After -= 2:", num); // Output= 13


num *= 3;
console.log("After *= 3:", num); // Output= 39

num /= 2;
console.log("After /= 2:", num); // Output= 19.5

num %= 4;
console.log("After %= 4:", num); // Output= 3.5
7) Array Access
- Create array ['HTML','CSS','JavaScript','React'].
- Print first element, second element, last element (using length), and total elements.
A) let technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
// Accessing array elements
console.log("First Element:", technologies[0]);
console.log("Second Element:", technologies[1]);
console.log("Last Element:", technologies[technologies.length - 1]);
// Total number of elements
console.log("Total Elements:", technologies.length);
8) Modify Array
- Add one element at end.
- Remove last element.
- Print updated array.
A) let fruits = ['Apple', 'Banana'];

// Add one element at the end
fruits.push('Mango');
console.log("After Adding Element:", fruits);
// Remove the last element
fruits.pop();
console.log("After Removing Last Element:", fruits);
9) Student Object
- Create object with name, age, course, city.
- Print values using dot notation.
A) let student = {
    name: "Mahiddar Reddy",
    age: 21,
    course: "JavaScript Training",
    city: "Ongole"
};
console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);
10) Nested Object Practice
- Create company object with nested trainer object.
- Print company name, trainer name, trainer subject.
A) let company = {
    companyName: "Stackly",
    trainer: {
        trainerName: "Naveen Kumar",
        subject: "JavaScript & Web Development"
    }
};
console.log("Company Name:", company.companyName);
console.log("Trainer Name:", company.trainer.trainerName);
console.log("Trainer Subject:", company.trainer.subject);
*/