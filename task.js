// Check Whether a Number Is Negative or Positive 

let number1 = 10;
if(number1 > 0){
    console.log('Positive Number');
}else{
    console.log('Negative Number');
}

let number2 = -10;
if(number2 > 0){
    console.log('Positive Number');
}else{
    console.log('Negative Number');
}

// Leap Year

const leap = 2024;
if(leap % 100 !== 0 && leap % 4 === 0){
    console.log('Leap year');
}
else if(leap % 400 === 0){
    console.log('Leap year');
}
else{
    console.log('Not leap year');
}
