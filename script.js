var operator;
var equation;
var answer;

function add() {
  var randomNum1 = Math.floor(Math.random() * 100);
  var randomNum2 = Math.floor(Math.random() * 100);
  equation = randomNum1 + " + " + randomNum2;
  document.getElementById('output').innerHTML = equation;
  answer = randomNum1 + randomNum2;
}
function subtract() {
  var randomNum1 = Math.floor(Math.random() * 100);
  var randomNum2 = Math.floor(Math.random() * 100);
  equation = randomNum1 + " - " + randomNum2;
  document.getElementById('output').innerHTML = equation;
  answer = randomNum1 - randomNum2;
}
function multiply() {
  var randomMultNum1 = Math.floor(Math.random() * 12);
  var randomMultNum2 = Math.floor(Math.random() * 12);
  equation = randomMultNum1 + " * " + randomMultNum2;
  document.getElementById('output').innerHTML = equation;
  answer = randomMultNum1 * randomMultNum2;
}
function divide() {
  var counter = 0;
  var evenNums = [];
  for(var i = 0; i < 70; i++) {
    counter += 2;
    evenNums.push(counter);
  }
  var randomNum1 = Math.floor(Math.random() * 69);
  var randomNum2 = Math.floor(Math.random() * 69);

  var num1 = evenNums[randomNum1];
  var num2 = evenNums[randomNum2];

  equation = num1 + " / " + num2;
  document.getElementById('output').innerHTML = equation;
  answer = num1 / num2;
}
function all() {
  var randomOperator = Math.floor(Math.random() * 4);
  var randomNum1 = Math.floor(Math.random() * 100);
  var randomNum2 = Math.floor(Math.random() * 100);
  var randomMultNum1 = Math.floor(Math.random() * 12);
  var randomMultNum2 = Math.floor(Math.random() * 12);
  if (randomOperator === 0) operator = " + ";
  else if (randomOperator === 1) operator = " - ";
  else if (randomOperator === 2) operator = " x ";
  else operator = " / ";

  if (operator === " * " || operator === " / ") {
    equation = randomMultNum1 + operator + randomMultNum2;
    document.getElementById('output').innerHTML = equation;
  } else {
    equation = randomNum1 + operator + randomNum2;
    document.getElementById('output').innerHTML = equation;
  }
}

function check() {
  var studentAnswer = document.getElementById('input').value;

  if(studentAnswer.toString() === answer.toString()) document.getElementById('status').innerHTML = "Correct!";
  else if(studentAnswer.toString() === "") document.getElementById('status').innerHTML = "Please type in an answer!";
  else document.getElementById('status').innerHTML = "Incorrect, try again!";
  console.log(answer);
  console.log(studentAnswer);
}

//For linear equations
//multiplies to c and adds to b 
var num1;
var num2;
var b;
var c;

function randomQuad() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  b  = num1 + num2;
  c = num1 * num2;

  document.getElementById('output2').innerHTML = "x^2+" + b + "x" + "+" + c;
}
function checkQuad() {
  var answer1 = "(x" + "+" + num1 + ")" + "(x" + "+" + num2 + ")=0";
  var answer2 = "(x" + "+" + num2 + ")" + "(x" + "+" + num1 + ")=0";

  console.log(answer1);
  console.log(answer2);
}
checkQuad();

function showAnswer() {
  document.getElementById('status').innerHTML = answer;
}

function reveal() {
  document.getElementById('practice').style.display = "block";
  document.getElementById('reveal').style.display = "none";
  document.getElementById('hide').style.display = "block";
}
function reveal2() {
  document.getElementById('practice2').style.display = "block";
  document.getElementById('reveal2').style.display = "none";
  document.getElementById('hide2').style.display = "block";
}
function hide() {
  document.getElementById('practice').style.display = "none";
  document.getElementById('reveal').style.display = "block";
  document.getElementById('hide').style.display = "none";
}
function hide2() {
  document.getElementById('practice2').style.display = "none";
  document.getElementById('reveal2').style.display = "block";
  document.getElementById('hide2').style.display = "none";
}
function successful() {
  alert("Thanks for reaching out to us! Your message was successfully sent to our servers and will be read by an employee promptly!");
}