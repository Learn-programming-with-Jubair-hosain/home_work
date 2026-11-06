// Condition 
const everyDayPractice = 7;
const oneWeekPractice = everyDayPractice * 7;
console.log(oneWeekPractice, 'hour');
if(oneWeekPractice >= 49){
    console.log('A gift on behalf of Dipu Bhai.');
}
else if(oneWeekPractice >= 30){
    console.log('You will get chocolate.');
}
else{
    console.log('You failed, so you have a punishment.');
}

// Average

let math = 70;
let java = 50;
let python = 45;
let networking = 65;
let avgSum = math + java + python + networking;
let avgMark = avgSum / 4;
let perInt = parseInt(avgMark);
console.log(perInt);


 /**
  * Celsius to Fahrenheit
  * Formula: F = (C * 9/5) + 32
  */
const celsius1 = 37;
const fahrenheit1 = (celsius1 * 9 / 5) + 32;
console.log('Fahrenheit1:',fahrenheit1); 

/**
 * Fahrenheit to Celsius
 * Formula: C = (F - 32)*5/9
 */
const fahrenheit2 = 100;
const celsius2 = (fahrenheit2 - 32)*5/9;
console.log('Celsius:',celsius2.toFixed(4));

// Grading System 

const marks = 100;
if(marks >= 80){
    console.log('A+');
}
else if(marks >= 70){
    console.log('A');
}
else if(marks >= 60){
    console.log('A-');
}
else if(marks >= 50){
    console.log(B);
}
else if(marks >= 40){
    console.log('C');
}
else if(marks >= 33){
    console.log('Pass');
}
else{
    console.log('Fail');
}

// Boolean

const homeWorkDone = true;
console.log(typeof homeWorkDone);
if(homeWorkDone === true){
    console.log('Good Boy');
}
else{
    console.log('Punishment');
}



// let sum1 = 10;
// let sum2 = 20;
// let total = sum1 + sum2;
// console.log(total);

// let num1 = 10;
// let num2 = 10;
// let total1 = num1 * num2;
// console.log(total1);

// let num3 = 100;
// let num4 = 10;
// let total2 = num3 / num4;
// console.log(total2);

// let num5 = 97;
// let num6 = 10;
// let ans = num5 % num6;
// console.log(ans);