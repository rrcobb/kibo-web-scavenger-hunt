function addReveal(revealerSelector, revealedSelector) {
  let revealer = document.querySelector(revealerSelector);
  revealer.addEventListener('click', function (e) {
    e.preventDefault();
    let revealed = document.querySelector(revealedSelector);
    revealed.classList.remove('hidden');
  });
}
addReveal('#start-tour', '.tour');
addReveal('.backup-tour', '.tour');
addReveal('#show-instructions', '.instructions');

// start
let startbutton = document.querySelector('.start button');
let checker = document.querySelector('.checker');
let results = document.querySelector('.results');
let input = document.querySelector('.checker input');
startbutton.addEventListener('click', function () {
  startbutton.classList.add('hidden');
  showNextChallenge()
  checker.classList.remove('hidden');
  results.classList.remove('hidden');
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
  1: "Rise",
  2: "to the challenge",
  3: "strong",
  4: "together",
  5: "to reach",
  6: "the peak",
}

function checkAnswer() {
  let attempt = input.value.toLowerCase();
  let answer = answers[currentChallenge].toLowerCase();
  if (attempt == answer) { 
    showNextChallenge();
    input.blur();
    input.value = ""; // clear
    input.focus();
    showFeedback(attempt, "Correct!", true);
  } else {
    showFeedback(attempt, "Keep trying", false);
  }
}

function showFeedback(attempt, message, correct) {
  let feedback = document.createElement('div');
  feedback.className = "feedback"
  feedback.innerText = `${attempt} `;
  let feedbackSpan = document.createElement('span');
  feedbackSpan.innerText = message;
  if (correct) {
    feedbackSpan.style = "color: mediumseagreen"
  } else {
    feedbackSpan.style = "color: lightcoral";
  }
  feedback.appendChild(feedbackSpan);
  // to clear results
  // results.querySelectorAll(".feedback").forEach(old => results.removeChild(old));
  results.prepend(feedback)
}

let currentChallenge = 0;
function showNextChallenge() {
  if (currentChallenge == 6) {
    checker.classList.add('hidden');
    let victory = document.querySelector('.victory');
    victory.classList.remove('hidden')
    let message = victory.querySelector('.message');
    for (let key in answers) {
      message.innerHTML += "<p>" + answers[key] + "</p>";
    }
  } else {
    currentChallenge++;
    let challenge = document.querySelector(`.challenge.--${currentChallenge}`)
    challenge.classList.remove('hidden');
  }
}

