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
  inputEl.style.borderColor = "#008000";
  btn.style.backgroundColor = "#008000"
  scoreEl.style.color = "#008000";
});

medium.addEventListener('click', function () {
  limit = 100;
  updateNumbers(limit);
  inputEl.style.borderColor = "#0044a9";
  btn.style.backgroundColor = "#0044a9"
  scoreEl.style.color = "#0044a9";
});

hard.addEventListener('click', function () {
  limit = 1000;
  updateNumbers(limit);
  inputEl.style.borderColor = "#9a0000";
  btn.style.backgroundColor = "#9a0000"
  scoreEl.style.color = "#9a0000";
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
