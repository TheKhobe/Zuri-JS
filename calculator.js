var num1 = parseFloat(prompt('Enter first number: '));
var num2 =parseFloat(prompt('Enter second number: '));
var operator = prompt('Enter operator ( either +, -, * or / ): ');

if(operator == '+') {
 result = num1 + num2;
} else if(operator == '-'){
 result = num1 - num2;
} else if(operator == '*'){
 result = num1 * num2;
} else{
 result = num1 / num2;
}

alert(result);