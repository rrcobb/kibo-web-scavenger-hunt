// start
let startbutton = document.querySelector('.start button');
let checker = document.querySelector(".checker");
let input = document.querySelector('.checker input');
startbutton.addEventListener('click', function () {
  startbutton.style.display = 'none'
  showNextPrompt()
  checker.style.display = 'flex'
  input.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
      checkAnswer()
    }
  })
  let check = checker.querySelector("button");
  check.addEventListener("click", checkAnswer);
  input.focus()
})


let answers = {
  1: "climb kibo",
  2: "you must build",
  3: "strong",
  4: "foundations",
  5: "to reach",
  6: "the peak",
}


// TODO:
// - show attempts below the checker
// - reveal hint after several missed attempts

function checkAnswer() {
  let attempt = input.value.toLowerCase();
  let answer = answers[currentPrompt];
  if (attempt == answer) { 
    showNextPrompt();
    input.blur();
    input.value = ""; // clear
    input.focus();
    showFeedback(attempt, "Correct!", true);
  } else {
    showFeedback(attempt, "That's not the answer. Keep trying.", false);
  }
}

function showFeedback(attempt, message, correct) {
  let feedback = document.createElement('div');
  feedback.className = "feedback"
  feedback.innerText = message;
  if (correct) {
    feedback.style = "color: mediumseagreen"
  } else {
    feedback.style = "color: lightcoral";
  }
  let results = document.querySelector('.results');
  results.querySelectorAll(".feedback").forEach(old => results.removeChild(old));
  results.appendChild(feedback)
}

let currentPrompt = 0;
function showNextPrompt() {
  if (currentPrompt == 6) {
    checker.style.display = 'none';
    let victory = document.querySelector('.victory');
    victory.style.display = 'block'; 
    let message = victory.querySelector('.message');
    for (let key in answers) {
      message.innerHTML += "<p>" + answers[key] + "</p>";
    }
  } else {
    currentPrompt++;
    let prompt = document.querySelector(`.prompt.--${currentPrompt}`)
    prompt.style.display = "block";
  }
}

