// STRING.

let str = "saurabh singh";
console.log(str);
console.log(typeof(str));

// Multi line string.
let message = `Hello
Welcome
JavaScript`;

console.log(message);

// STRING CONCATINATION.

let firstt = "Saurabh";
let lastt = "Singh";
let fulll = firstt + " " + lastt;

console.log(fulll);


// Using Template Literals(another method)
let first = "Saurabh";
let last = "Singh";
console.log(`${first} ${last}`)


// Escape Characters.
console.log("He said \"Hello\"");
console.log('It\'s JavaScript');
console.log("Hello\nWorld");

// doosri value ko string mein convert kar sakte hain.
String(123);      // "123"  
String(true);     // "true"
String(null);     // "null"


//string length.
let word = "JavaScript";
console.log(word.length); 


// JavaScript strings immutable hoti hain—existing string ke character ko seedha badal nahi sakte.
let Name = "Saurabh";
Name[0] = "G";

console.log(Name);

Name = "G" + Name.slice(1);  //Naya string banana hoga.
console.log(Name); 

console.log(5 + 2);   // 7
console.log("5" + 2); // "52"
console.log(Number("5") + 2); // 7


// LOOPS THROUGH STRING.

let str1 = 'JavaScript';

for(let i=0; i<str1.length; i++){
    console.log(str1[i]);
}

//count total character.
let strr = 'JavaScript';
let count = 0;

for(let i=0; i<strr.length; i++){
    count++;
}
console.log(count);


//count vowels.
let str3 = "Programming";
let countt = 0;

for (let i = 0; i < str3.length; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        countt++;
    }
}
console.log(countt);

//count consonents.
let str4 = "Programming";
let count1 = 0;

for (let i = 0; i < str4.length; i++) {
    if (
        str[i] !== "a" &&
        str[i] !== "e" &&
        str[i] !== "i" &&
        str[i] !== "o" &&
        str[i] !== "u"
    ) {
        count1++;
    }
}
console.log(count1);

//count a specific character.
let str5 = "programming";
let count2 = 0;

for (let i = 0; i < str5.length; i++) {
    if (str[i] === "m") {
        count2++;
    }
}

console.log(count2);


//STRING METHODS.
// String methods aksar naya string return karte hain, original string nahi badalti.

// IMPORTANT METHODS.

// 1.change case.
let word2 = "JavaScript";

console.log(word2.toUpperCase()); // "JAVASCRIPT"
console.log(word2.toLowerCase()); // "javascript"

//2.remove spaces from front & end.
let input = "  Saurabh  ";

console.log(input.trim());      // "saurabh"
console.log(input.trimStart()); // "saurabh  "
console.log(input.trimEnd());   // "  saurabh"

//3. remove some parts.
let word5 = "JavaScript";

console.log(word5.slice(0, 4)); // "Java"
console.log(word5.slice(4));    // "Script"
console.log(word5.slice(-6));   // "Script"

//find a parts.
let sentence = "I am learning JavaScript";

console.log(sentence.includes("learning")); // true
console.log(sentence.indexOf("JavaScript")); // 14
console.log(sentence.indexOf("Python")); // -1
console.log(sentence.startsWith("I am")); // true
console.log(sentence.endsWith("Script")); // true

// Replace first occurrence.
let text = "red car, red bike";
console.log(text.replace("red", "blue")); 


// Replace all occurrences.
console.log(text.replaceAll("red", "blue"));


// Convert string to array
let fal = "apple,banana,mango";
let fruits = fal.split(",");
console.log(fruits); // ["apple", "banana", "mango"]


//convert array to string.
let veg =['carrot','potato','tomato']
console.log(veg.join('|'))
console.log(typeof(veg.join('|')))

//repeat
console.log("ha".repeat(3)); // "hahaha"


//convert number to string(viceversa).
let value = 42;
console.log(String(value));   //"42"    
console.log((42).toString());  //"42"

console.log(Number("42"));       // 42
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14

/* 
	Method       	Purpose

 1	length  	Count characters

 2	toUpperCase()	Convert to uppercase

 3	toLowerCase()	Convert to lowercase

 4	trim()	Remove spaces

 5	trimStart()	Remove spaces from the beginning

 6 	trimEnd()	Remove spaces from the end

 7	includes()	Check if text exists

 8 	startsWith()	Check starting text

 9	endsWith()	Check ending text

 10	indexOf()	Find first position

 11	lastIndexOf()	Find last position

 12	charAt()	Character at an index

 13	at()	Character by index (supports negative index)

 14	slice()	Extract part of a string

 15	substring()	Extract using start/end indexes

 16	substr()	Legacy substring method

 17	replace()	Replace first occurrence

 18	replaceAll()	Replace all occurrences

 19	split()	Convert string to array

 20	concat()	Join strings

 21	repeat()	Repeat a string

 22	padStart()	Pad at the beginning

 23	padEnd()	Pad at the end

 24	search()	Search using text/regex

 25	match()	Find matching text

 26	matchAll()	Find all regex matches

 27	localeCompare()	Compare strings alphabetically

 28	valueOf()	Primitive string value

 29	toString()	Convert to string

 30	String.raw()	Raw template strings       */
 
