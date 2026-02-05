/*TASK – 3 (Based on Today’s Session)
Mahiddar Reddy M
Associate Software Engineer

Part 1 – Logical & Ternary Operator
Q1: Check whether a number is between 10 and 50 using logical AND.
Input: let num = 25
Output: "Valid Number" or "Invalid Number"
 Ans:  */
 let num = 25;
 if (num >=10 && num<=50) {
    console.log("Valid Number");
    
 } else {
    console.log("Invalid Number");
    
 }


 /*Q2: Check if a user is eligible to log in.
Condition:
username must be "admin"
password must be "1234"
Use logical AND.
 Ans:  */
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}


/*Q3: Using ternary operator:
Check if a number is even or odd.
 Ans ;  */
let num1 = 3;

let res = (num % 2 === 0) ? "Even Number" : "Odd Number";
console.log(res);

/*Q4: What is the output?
console.log((10 === "10") || (5 > 2) && !(3 < 1));
Explain step by step.
 Ans :   

Explanation: i) 10 === "10"
                === : checks value + type
                Number 10 is not equal to string "10"
                Result : False
            ii) 5 > 2
                Result : True
            iii) 3 < 1
                 Result : False
                !(3 < 1) : ! means NOT 
                It reverse the result
                Result : True

In Js operator Priority is Not , And and or
    True && True = True
    False || True = True 
so the final answer is True 

Part 2 – Type Conversion
Q5: Find the output and explain:
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

Ans :
  console.log("5" + 2); // 52
  + with a string means joining (concatenation), not math

  console.log("5" - 2); // 3
  - is only for math JavaScript converts "5" into number 5

  console.log("5" * 2); // 10
  * is also math only "5" is converted to number

  console.log("5" / 2); // 2.5
  / works only with numbers JavaScript converts "5" to number


Q6: Convert the following using explicit conversion:
let value = "100";
- Convert to Number
- Convert to Boolean
Ans : */
    let value = "100";

// Convert to Number
let numValue = Number(value);
console.log(numValue);        // 100
console.log(typeof numValue); // number

// Convert to Boolean
let boolValue = Boolean(value);
console.log(boolValue);        // true
console.log(typeof boolValue); // boolean

/*Q7: What will be the output?
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean([]));
Explain why?
Ans : */
    console.log(Boolean("")); // False
    // "" is an empty string

    console.log(Boolean(" ")); // True
    //" " has a space inside It is NOT empty
    //Any non-empty string is true

    console.log(Boolean(0)); // False
    // 0 is treated as false

    console.log(Boolean([])); // True
    // [] is an empty array But arrays are objects
    // All objects are considered true, even if they are empty


/*Part 3 – Conditional Statements
Q8: Write a program:
If marks >= 90 → Grade A
If marks >= 75 → Grade B
If marks >= 50 → Grade C
Else → Fail
Use if else if.
Ans : */
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}                         // Output : Grade B 


/*Q9: Traffic Signal Program using switch case:
"red" → Stop
"yellow" → Ready
"green" → Go
Default → Invalid Signal
Ans :
   let signal = "Yellow";
switch (signal) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid Signal");
}                                           // output : Ready

Q10 (Nested If): Check eligibility:
Age >= 18
Height >= 160
Weight >= 50
If all true → "Selected"
Else → show which condition failed.
Ans : */
  
let age = 21;
let height = 185;
let weight = 83;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}                                           // Selected

/*Part 4 – Loops
Q11: Print numbers from 1 to 20 using for loop.
Ans: */

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/*Q12: Print only odd numbers from 1 to 20.

Ans: */
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*Q13: Using while loop:
Print numbers from 10 to 1.
Ans : */
let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

/*Q14: Using do-while loop:
Print numbers from 1 to 5.
Ans: */

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

/*Q15: Using for-of loop:
Print each character from:
let word = "STACKLY"
Ans : */

let word = "STACKLY";

for (let char of word) {
  console.log(char);
}

/*Q16: Using for-in loop:
Print both key and value from:
let student = {
name: "Arun",
course: "MERN",
duration: "6 months"
}
Ans : */
let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}
/* Output : name : Arun
            course : MERN
            duration : 6 months





Real-Time Questions
RT-1: Login System
If username = "admin" AND password = "1234" → "Login Success"
Else → "Invalid Credentials"
Use logical operator + ternary.
Ans ; */
let username1 = "admin";
let password1 = "1234";

let res1 = (username === "admin" && password === "1234") ? "Login Success" : "Invalid Credentials";

console.log(res1); 

/*RT-2: Salary Bonus System
If employee salary > 50000 AND experience > 3 years
→ Eligible for bonus
Else → Not eligible
Ans : */

let salary = 80000;
let experience = 4;

let res2 = (salary > 50000 && experience > 3)
  ? "Eligible for bonus"
  : "Not eligible";

console.log(res2);

/*RT-3: Shopping Discount
If cart amount:
>= 5000 → 20% discount
>= 2000 → 10% discount

< 2000 → No discount
Use if-else if.
Ans: */

let cartAmount = 5500;

if (cartAmount >= 5000) {
  console.log("20% discount");
} else if (cartAmount >= 2000) {
  console.log("10% discount");
} else {
  console.log("No discount");
}

/*RT-4: Even/Odd Counter
Count how many even numbers between 1 to 50.
Ans: */

let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count);

/*RT-5: Dynamic Greeting System
If hour between:
1–6 → Good Morning
7–12 → Morning
13–16 → Good Afternoon
17–19 → Good Evening
Else → Good Night

Ans : */

let hour = 14;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}                                // Good Afternoon


