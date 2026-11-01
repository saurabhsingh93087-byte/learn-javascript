// Array ek special variable hai jo multiple values ko ek hi variable me store karta hai.
//arrays are mutable so arrays can be changed.

let Pet = ['cow','dog', 'cat', 'rat']
console.log(Pet);
console.log(typeof(Pet));
console.log(Pet.length);

console.log(Pet[0]);
console.log(Pet[1]);
console.log(Pet[2]);
console.log(Pet[3]);


const items = new Array("pen", "book");
console.log(items);
console.log(typeof(items));


let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
fruits[2] = 'kela';
fruits[3] = 'amrud';     
console.log(fruits);


let numbers = [10,20,30,40,50];
console.log(numbers.length);


// Array me sab type ki values ho sakti hain.
let data = ["Saurabh", 21,true,null];

console.log(data);


// ARRAYS METHOD.

// 1.push() -  add element at the end.

let fruit = ['apple','banana'];
fruit.push('mango')
console.log(fruit);

// 2.pop() - remove last element.

fruit.pop();
console.log(fruit);

// 3.unshift() - add at beginning.

fruit.unshift('mango');
console.log(fruit);

//4.shift() - remove first element.

fruit.shift();
console.log(fruit);

//5.length - total elements.

let country = ['india','USA','china','russia']
console.log(country.length);

//6.indexOf() - find the index of element.

console.log(country.indexOf("china"));

//7.includes() - check if an elements exists.

console.log(country.includes("pakistan"));
console.log(country.includes("india"));

//8.join() - converts array into strings.

console.log(country.join('-'));

//8.toString() -converts arrays to string.

let arr=[1,2,3]
console.log(arr.toString());
//9.reverse() - reverse the array.

let state = ['bihar','up','jharkhand','assam']
console.log(state.reverse());

//10.sort() - arrange alphabetically by default.

let country1 = ['India','USA','China','Russia']
console.log(country1.sort());

//11.slice() - returns a part of the array without changing the original.

let num4=[10,20,30,40,50]
console.log(num4.slice(1,4))

//12.splice() - adds or removes elements from the original array.

let nums=[10,20,30,40]
console.log(nums.splice(1,2))

//13. concat() - joins array.

let a=[2,4];
let b=[6,8];
console.log(a.concat(b));


//14. map() - creates a new array by transforming each elements.

let number=[2,3,4,5]
let square=number.map(num=> number*number);


// Loops through Arrays.

let students = ["Rahul", "Aman", "Saurabh", "Rohit", "Ankit"];
for (const student of students) {
  console.log(student);
}

let marks=[90,85,70,95,80];
for(let mark of marks){
    console.log(mark);
}

let mark=[90,85,70,95,80];     //use for loop.
for(let i=0; i<mark.length; i++){
    console.log(i)
}

//reverse  array.

let array = [1,2,3,4,5];

for(let i=array.length-1; i>0; i--){
    console.log(array[i]);
}


//even number.
let arr5 = [23,22,12,33,45,56,44,31,91]

for(let i=0; i<arr5.length; i++){
    if(arr5[i] % 2 === 0){
        console.log(arr5[i]);
    }
}

// odd number.
let arr6 = [23,22,12,33,45,56,44,31,91]

for(let i=0; i<arr6.length; i++){
    if(arr6[i] % 2 === 0){
        console.log(arr6[i]);
    }
}

// count even and odd number.

let arr7 = [10,21,30,45,50];

let even = 0;
let odd = 0;

for(let i=0; i<arr7.length; i++){
    if(arr7[i] % 2 === 0){
        even++;
    }else {
        odd++;
    }
}
console.log('Even:',even);
console.log('Odd:',odd);


//sum of arrays.
let num = [10,20,30,40,50];
let sum = 0;

for(let i=0; i<num.length; i++){
    sum = sum + num[i];
}
console.log(sum);

//maximum number.

let arr1 = [20,60,80,40];
let max=arr1[0];

for(let i=0; i<arr1.length;i++){
    if(arr1[i] > max){
        max = arr1[i];
    }
}
console.log(max);

//minimum number.

let arr2=[20,80,40,10];
let min=arr2[0];

for(let i=1;i<arr2.length;i++){
    if(arr2[i]<min){
        min=arr2[i];
    }
}
console.log(min);


//total sum.

let prices=[500,1000,250];
let total=0;

for(let i=0; i<prices.length; i++){
    total += prices[i];
}
console.log(total);

//find average.

let arr3 = [10,20,30,40,50]
let summ = 0;

for(let i=0; i<arr3.length; i++ ){
    summ = summ + arr3[i]
}
let average = sum / arr3.length;
console.log(average);






