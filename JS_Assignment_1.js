
//Assignment-1 = Student Marks Analyzer.

//01.Student Details.
let name = "Rahul kumar";
console.log("Student Name :", name.toUpperCase());

let rollNo = "101";
console.log("Roll Number :",rollNo);


let department = "CSE";
console.log("Department :",  department);



// 02.Marks of five subjects.
let marks = [78,85,62,91,34];


//03.Calculate total marks.
function calculateTotal(marks) {
    let total = 0;
    for(let i=0; i<marks.length; i++) {
        total += marks[i];
    }
    return total;
}
total_Marks = calculateTotal(marks);
console.log("Total Marks :",total_Marks);


//04.Calculate percentage.
function calculatePercentage(marks) {
    let total_Marks = calculateTotal(marks);
    return total_Marks/marks.length;
}
let percentage = calculatePercentage(marks);
console.log("Percentage :",percentage);



//05.Find Heighest Marks.
function Highest_Marks(marks) {
    let highest = marks[0];
    for(let i=1; i<marks.length; i++){
        if(marks[i] > highest){
            highest = marks[i];
        }
    }
    return highest;
}

let highest = Highest_Marks(marks);
console.log("Highest Marks :",highest);



//06.Find lowest marks.
function Lowest_Marks(marks) {
    let smallest = marks[0];
    for(let i=1; i<marks.length; i++){
        if(marks[i] < smallest){
            smallest = marks[i];
        }
    }
    return smallest;
}

let Lowest = Lowest_Marks(marks);
console.log("Lowest Marks : ",Lowest);



//07.Count passed subjects(marks >= 40).
function count_Passed(marks) {
    let passed = 0;
    for(let i=0; i<marks.length; i++){
        if(marks[i] >= 40){
            passed++;
        }
    }
    return passed;
}

let passedSubjects = count_Passed(marks);
console.log("Subjects Passed :",passedSubjects);


//08.
let name1 = "Rahul kumar";
console.log("Student Name :", name.toUpperCase());
console.log("No. of characters :",name1.length); 



//Bonus Challenge.
function grade(percentage) {
    if(percentage >= 80){
        return "Excellent";
    }else if(percentage >=60){
        return "Good";
    }else if(percentage >= 40){
        return "Average";
    }else{
        return "Needs Improvement";
    }
}
console.log("performance :",grade(percentage));







