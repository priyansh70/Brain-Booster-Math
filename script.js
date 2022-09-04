// All HTML Element 
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("inp");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const btn = document.getElementById("btn");
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

// intitalizes score 
let score = 0;
let limit = 10;
// generate random Numbers 
let num1;
let num2;
updateNumbers(limit);

// Now add categories by Limit
easy.addEventListener('click', function () {
  limit = 10;
  updateNumbers(limit);
});

medium.addEventListener('click', function () {
  limit = 100;
  updateNumbers(limit);
});

hard.addEventListener('click', function () {
  limit = 1000;
  updateNumbers(limit);
});
// check validations and correct answers 
btn.addEventListener('click', validation);
function validation() {
  if (inputEl.value == "") {
    document.getElementById('warning').textContent = "Answer Can not be Empty";
    return;
  }
  document.getElementById('warning').textContent = "";
  let userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateScore(limit);
  }
  else {
    score--;
    updateScore(limit);
  }
}

// update score 
function updateScore() {
  scoreEl.innerText = `score: ${score}`;
  inputEl.value = "";
  updateNumbers(limit);
}

function updateNumbers(limit) {
  num1 = Math.ceil(Math.random() * limit);
  num2 = Math.ceil(Math.random() * limit);
  questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
  correctAns = num1 * num2;
}