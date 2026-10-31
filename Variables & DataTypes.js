//  VARIABLES.

// Use CONST when you are not assign a different value to the variable later.

const name = "Saurabh";
const age = 19;

console.log(name); 


const myCollege = "Quad Ai";
console.log(myCollege);


const AdhaarNo = "4352 5638 667737";
console.log(AdhaarNo);



//Use LET when the variable needs to hold a new value later.

let marks = 84;
score = 99;

console.log(marks); 

let friend = ('krish');
friend = 'himanshu';

console.log(friend);


// var is the older declaration.it not used currently.


//DATA TYPES.

// 1.STRING

const firstName = "SAURABH SINGH";
const greeting = `Hello, ${firstName}!`;

console.log(greeting); 


let language = "JavaScript";
console.log(language);

let myTeacher = "Nitish Sir";
console.log(myTeacher);


// 2.NUMBER

const rollNo = 12;
console.log(rollNo);

let Age = 19;
console.log(Age);
console.log(typeof Age)

const items = 3;
const price = 19.99;

console.log(items + price); 


const price_of_KELA = 70;
const tax_of_KELA = 20;
const total_Cost_KELA = price_of_KELA + tax_of_KELA;

console.log(total_Cost_KELA); 


// 3.BIGINT


// 4.BOOLEAN

let isStudent = true;
let isGraduated = false;

console.log(isStudent);
console.log(isGraduated);


console.log(10>5);

console.log(8 >= 8);


let Age1 = 10;
let canVote = Age1>=18;
console.log(canVote);


// 5.UNDEFINED

let selectedItem;
console.log(selectedItem);

let coll;
console.log(coll);

// 6.NULL

let data = null;
console.log(data);

let middle_Name = null;
console.log(middle_Name);


//7.OBJECT.

const student = {
  name: "Saurabh",
  college: "Quad AI",
  my_Teacher: "Nitish Sir",
  programming_Language: "JavaScript",
  grade: 10
};

console.log(student); 

// Checking a value’s type.

console.log(typeof "hello"); 
console.log(typeof 42);     
console.log(typeof true);   
console.log(typeof undefined); 
console.log(typeof {});      