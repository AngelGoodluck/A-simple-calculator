//Accepting user's input but this is just limited to two inputs.
const prompt = require('prompt-sync')();
let num1 = prompt('Enter your first number:')
//Checking if the input is a valid number or not. If not, it will ask the user to enter a valid number.
if (isNaN(num1)) {
    console.log('Invalid input for the first number.');
num1 = prompt('Please enter a valid number.');

} else {
    console.log(`The first number you entered is: ${num1}`);
}
let num2 = prompt('Enter your second number:');if (isNaN(num2)) {
    console.log('Invalid input for the second number.');
    num2 = prompt('Please enter a valid number.');
} else {
    console.log(`The second number you entered is: ${num2}`);
}
//To prompt the user that the operation is case-sensitive.
console.log('Now, you have entered two numbers. You can perform an operation on them. But take note that the operation is case-sensitive. Please enter it as shown in the options.');
const operation = prompt('What would you like to do with the numbers? Add, Subtract, Multiply, or Divide: ')
 
//Changing num1 and num2 to numbers for calculation.
const n1 = Number(num1);
const n2 = Number(num2);


//Using the switch statement for the opration.

switch(operation){
    //For Addition;
case 'Add':
    const addingNumbers = n1 + n2;
console.log(`The sum of ${num1} and ${num2} is ${addingNumbers}`);
break;

//For Subtraction
case 'Subtract':
    const subtractingNumbers = n1 - n2;
    console.log(`The difference of ${num1} and ${num2} is ${subtractingNumbers}`);
    break;

    //For Multiplication
case 'Multiply':
    const multiplyingNumbers = n1 * n2;
    console.log(`The product of ${num1} and ${num2} is ${multiplyingNumbers}`);
    break;

   //For Division
case 'Divide':
    if (n2 === 0) {
        console.log('Error: Division by zero is not allowed.');
    } else {
        const dividingNumbers = n1 / n2;
        console.log(`The quotient of ${num1} and ${num2} is ${dividingNumbers}`);
    }
    break;
   default:
        console.log('Invalid operation. Please choose Add, Subtract, Multiply, or Divide.');
        break;
}
//End of the code...