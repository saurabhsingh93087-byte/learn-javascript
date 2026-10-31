//OPERATORS.

//1. Arithmetic operators

const a = 10;
const b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);    //it gives reminder
console.log(a ** b);  
console.log(a + b);  


//The remainder operator % is useful for checking whether a number is even or odd.

const number = 8;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//Ican increase or decrease a number by one with ++ and -- 

let count = 5;

count++;
console.log(count); 

count--;
console.log(count); 


// 2. Assignment operators

Total = 10;
console.log(Total)

Total += 5;
console.log(Total); 

Total -= 5;
console.log(Total); 

Total *= 5;
console.log(Total); 

Total /= 5;
console.log(Total); 

Total %= 5;
console.log(Total); 

Total **= 5;
console.log(Total); 

let score = 10;
score *= 3;

console.log(score); 


//3. Comparison operators

//it always return true/false values.

let m = 10;
let n = 20;

console.log(m == n);
console.log(m != n);
console.log(m > n);
console.log(m < n);
console.log(m >= n);
console.log(m <= n);
console.log(m !== n);

console.log(5 == "5");  // true
console.log(5 === "5"); // false

// Use of strict equality operators in most cases.

console.log(5 === 5);   // true: same value and type

console.log(5 === "5"); // false: different types

console.log(5 !== "5"); // true: not equal in value or type


// 4. Logical operators

//1. AND(&&):

// && evaluates to true only when both conditions are true.

const age = 25;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("You may enter");
}

// 2. OR(||):

//  || evaluates to true when at least one condition is true.

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today");
}


//3. NOT (!):

// ! reverses a boolean value.

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}


// CONDITIONAL STATEMENTS.

// Use IF to run code when a condition is true. 
// use ELSE IF for another condition.
// and use ELSE for the remaining case.

let age3 = 20;
if(age3 >=18){
    console.log("tum ab bade ho gai ho!");
}


const temperature = 24;

if (temperature > 45) {
  console.log("summer season");
} else if (temperature >= 25) {
  console.log("rainy season");
} else if (temperature <= 9) {
  console.log("winter season");
} else{
    console.log("spring season")
}


let markss = 92;

if(markss >=90){
    console.log("Grade A")
} else if(markss >=70){
    console.log("Grade B")
} else if(markss >= 50){
    console.log("grade C")
} else if(markss >= 30){
    console.log("Grade D")
} else{
    console.log("Tum Fail Ho!")
}

let balance = 5000;
let withdraw = 3000;

 if (balance >= withdraw) {
    console.log("Transaction Successful");
 } else {
    console.log("Insufficient Balance");
 }

// check the nuber is 'even' or 'odd'?
let num = 7;
 if(num % 2 === 0){
     console.log(num,"is Even");
 } else{
     console.log(num, "is odd");
 }


// NESTED IF.

let age4 = 10;
let hasLicense = true;

if(age4 >=18){
    if(hasLicense) {
        console.log("you can Drive");
    } else{
        console.log("Get a License First0");
    }} else {
        console.log("Tum abhi baccha ho")
}


// Ternary operator.
// condition ? valueIfTrue : valueIfFalse

const age2 = 17;
const message = age2 >= 18 ? "Adult" : "Minor";

console.log(message); 


// SWITCH Statements.


