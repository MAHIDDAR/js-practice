// INTERMEDIATE LEVEL - FUNCTIONS FULL ASSIGNMENT

// SECTION 1 – Real-Time Function Logic

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

const calculateSalary = (basicSalary, bonusPercentage) => {
  const empName = "Mahiddar Reddy";
  const empCode = "EMP67890";
  const role = "Associate Software Engineer";

  const bonusAmount = (bonusPercentage / 100) * basicSalary;
  const grossPay =basicSalary + bonusAmount;
  const taxAmount = (5 / 100) * grossPay;
  const netSalary = grossPay - taxAmount;

  console.log(`Employee Name: ${empName}`);
  console.log(`Employee Code: ${empCode}`);
  console.log(`Designation: ${role}`);
  console.log("---- Salary Breakdown ----");
  console.log(`Basic Salary: ₹${basicSalary}`);
  console.log(`Bonus: ₹${bonusAmount}`);
  console.log(`Gross Salary: ₹${grossPay}`);
  console.log(`Tax Deducted: ₹${taxAmount}`);
  console.log(`Final Salary: ₹${netSalary}`);

  return netSalary;
};
calculateSalary(25000, 14);

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object


function generateResult(name, marksArray) {
  const total = marksArray.reduce((acc, curr) => acc + curr, 0);
  const average = total / marksArray.length;
  let grade = "Fail";

  if (average >= 90) {
    grade = "A";
  } else if (average >= 75) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  }

  return {
    name: name,
    total: total,
    average: average,
    grade: grade
  };
}

const result = generateResult("Mahiddar Reddy", [80, 81, 92, 64, 75]);
console.log(result);


// SECTION 2 – Scope & Hoisting (Debugging)
// 3. Debug This Code:
function demo(){
if(true){
var a = 10;
let b = 20;
}
console.log(a);
console.log(b);
}
/* Questions:
 - What will happen?
 - Why?
 ANSWER:
 num1 will be printed because var is function scoped.
num2 will cause an error since let is block scoped and not accessible outside the block.

 Fix :       */
function scopeDemo() {
  if (true) {
    var num1 = 10;
    let num2 = 20;
    console.log(num1);
    console.log(num2);
  }
}
scopeDemo();

function scopeDemo2() {
  let a, b;
  if (true) {
    a = 25;
    b = 45;
  }
  console.log(a);
  console.log(b);
}
scopeDemo2();

/*4. Hoisting Analysis:
console.log(x);
var x = 100;
console.log(y);
let y = 200;
Predict output and explain. */
// Output: undefined

// console.log(data);
//var x = 100;

// console.log(y); → ReferenceError: Cannot access 'y' before initializa

/* Explanation :
    When JavaScript executes the code, it first goes through a compilation phase where variable declarations are processed. In the case of var x, the declaration is hoisted to the top of its scope and automatically initialized with the value undefined. Because of this, x exists in memory before the execution reaches console.log(x), but since the assignment x = 100 happens later, the output is undefined. On the other hand, let y is also hoisted, but it is not initialized during the hoisting phase. Instead, it remains in the temporal dead zone until the line where it is actually declared and assigned. Accessing y before this initialization causes JavaScript to throw a ReferenceError, which is why console.log(y) fails before let y = 200 is executed. */

// SECTION 3 – Callback & Higher Order (Industry Simulation)

// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

const processOrder = (orderNo, callbackFn) => {
  console.log(`Order Processed for Order No: ${orderNo}`);
  callbackFn(orderNo);
};

processOrder("ORD141", (orderNo) => {
  console.log(`Invoice Generated for Order No: ${orderNo}`);
});

// 6. Bank Transaction System:
/*Create transaction(amount, type, callback)
- If deposit → add
- If withdraw → subtract
- Call sendSMS() */


const notifyUser = (msg) => {
  console.log(`SMS Alert: ${msg}`);
};

const bankTransaction = (amount, action, callback) => {
  if (action === "deposit") accountBalance += amount;
  else if (action === "withdraw") accountBalance -= amount;

  callback(accountBalance, amount, action);
};

bankTransaction(6000, "deposit", (balance, amount, action) => {
  console.log(`Balance after ${action}: ₹${balance}`);
  notifyUser(`₹${amount} ${action} successful. Current Balance: ₹${balance}`);
});

// SECTION 4 – Currying (E-Commerce)

// 7. Dynamic Price Builder:
/*7. Dynamic Price Builder:
Create priceBuilder(basePrice)(discount)(tax)
Return final price
Example: priceBuilder(2000)(15)(18)*/
const calculatePrice = (baseAmount) => (discountRate) => (taxRate) => {
  const amountAfterDiscount =
    baseAmount - (baseAmount * discountRate) / 100;

  const amountAfterTax =
    amountAfterDiscount + (amountAfterDiscount * taxRate) / 100;

  console.log(`Original Price: ₹${baseAmount}`);
  console.log(`Discount Applied: ${discountRate}%`);
  console.log(`Tax Applied: ${taxRate}%`);

  return amountAfterTax;
};

// Example
console.log("Final Price:", calculatePrice(2000)(15)(18));

/*SECTION 5 – IIFE (Security + Encapsulation)
8. Secure Company Module:

- Store private variable companyCode
- Expose getCompanyStatus()
- companyCode should not be directly accessible */
const CompanyModule = (() => {
  const secretKey = "STACKLY_SECURE_100";
  return {
    getStatus() {
      return "Company module is running securely";
    },
  };
})();
console.log(CompanyModule.getStatus());

// SECTION 6 – Generator (Advanced Logic)

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.
function* orderIdGenerator() {
    let id = 1001;
    while(true) yield `ORD${id++}`;
}


// 10. Coupon Spin System:
/*yield :
- 10% OFF
- 20% OFF
- 50% OFF
- No Luck
- Jackpot
Simulate multiple spins. */
function* rewardGenerator() {
  yield "10% Discount";
  yield "20% Discount";
  yield "40% Discount";
  yield "Try Again";
  yield "Super Jackpot";
}

const spinWheel = rewardGenerator();

console.log(spinWheel.next().value);
console.log(spinWheel.next().value);
console.log(spinWheel.next().value);

/*SECTION 7 – Mini Project (Integrated)
Mini E-Commerce Flow:
- addToCart(product, price)
- calculateTotal()
- applyDiscount() using currying
- generateCoupon() using generator
- processPayment() using callback
- Hide config using IIFE*/

// SECTION 7 – Mini Project (Integrated)
// Mini E-Commerce Flow using IIFE

const ecommerceSystem = (() => {

  const items = [];


  const addItemToCart = (itemName, itemPrice) => {
    items.push({ name: itemName, price: itemPrice });
    console.log(`${itemName} added to cart`);
  };

  
  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  
  const applyDiscount = (total) => (discountPercent) => {
    return total - (total * discountPercent) / 100;
  };


  function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "30% OFF";
    yield "No Offer";
  }

  
  const makePayment = (amount, callback) => {
    console.log(`Processing payment of ₹${amount}`);
    callback(amount);
  };


  return {
    addItemToCart,
    getTotalAmount,
    applyDiscount,
    couponGenerator,
    makePayment
  };
})();

ecommerceSystem.addItemToCart("Laptop", 60000);
ecommerceSystem.addItemToCart("Headphones", 5000);

let total = ecommerceSystem.getTotalAmount();
total = ecommerceSystem.applyDiscount(total)(10);

const couponSpin = ecommerceSystem.couponGenerator();
console.log("Coupon:", couponSpin.next().value);

ecommerceSystem.makePayment(total, (amount) => {
  console.log(`Payment of ₹${amount} successful`);
});

// Concept Questions:

/* 1. Difference between function declaration & expression?
Ans:
Function declarations are hoisted completely, so they can be invoked before their definition appears in the code.
Function expressions are stored in variables and can be used only after the assignment is executed.


2. What is higher order function?
Ans:
A higher-order function is a function that accepts another function as an argument or returns a function as its result.
They are commonly used to make code more reusable, flexible, and modular.

3. Real-time example of generator?
Ans:
Generators are used in scenarios like infinite scrolling, pagination, or lazy loading of data.
They help handle large data efficiently by producing values one at a time instead of all at once.

4. Why do we use IIFE?
Ans:
IIFE is used to create a private scope and prevent variables from leaking into the global scope.
It improves security and avoids naming conflicts in large applications.

5. Difference between var, let, const?
Ans:
var is function-scoped and allows re-declaration, which can cause unexpected behavior.
let and const are block-scoped, with const not allowing reassignment after initialization. */


