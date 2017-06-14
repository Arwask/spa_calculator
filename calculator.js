let addBtn = document.getElementById('add');
let subBtn = document.getElementById('substract');
let divBtn = document.getElementById('divide');
let multiplyBtn = document.getElementById('multiply');


addBtn.addEventListener("click", function()
{
	console.log(event);
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(addition,num1, num2);
});

subBtn.addEventListener("click", function()
{
	console.log(event);
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(subtraction,num1, num2);
});
divBtn.addEventListener("click", function()
{
	console.log(event);
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(division,num1, num2);
});

multiplyBtn.addEventListener("click", function()
{
	console.log(event);
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(multiply,num1, num2);
});
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2)
{
	console.log(num1*num2);

}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addition(num1, num2)
{
	answer = num1 + num2;
	console.log(answer);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(num1, num2)
{
	answer = num1 - num2;
	console.log(answer);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(num1, num2)
{
	console.log(num1 / num2);
}

 function calculate(function1, num1, num2)
{
	function1(num1,num2);
}