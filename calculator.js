let addBtn = document.getElementById('add');
let subBtn = document.getElementById('substract');
let divBtn = document.getElementById('divide');
let multiplyBtn = document.getElementById('multiply');


addBtn.addEventListener("click", function()
{
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(addition,num1, num2);
});

subBtn.addEventListener("click", function()
{
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(subtraction,num1, num2);
});
divBtn.addEventListener("click", function()
{
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(division,num1, num2);
});

multiplyBtn.addEventListener("click", function()
{
	var num1 = parseInt(document.getElementById('number1').value);
	var num2 = parseInt(document.getElementById('number2').value);
	calculate(multiply,num1, num2);
});

function multiply(num1, num2)
{
	answer = num1*num2;
	printAnswer(answer);
}

function addition(num1, num2)
{
	answer = num1 + num2;
	printAnswer(answer);
}

function subtraction(num1, num2)
{
	answer = num1 - num2;
	printAnswer(answer);
}

function division(num1, num2)
{
	answer = (num1 / num2);
	printAnswer(answer);
}

 function calculate(function1, num1, num2)
{
	function1(num1,num2)
}

function printAnswer(value)
{
	 document.getElementById('answer').value = value;
}