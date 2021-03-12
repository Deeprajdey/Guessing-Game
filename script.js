//Document Nodes

const userInput = document.querySelector('.input');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const generalText = document.querySelector('.general-text');
const guessedMsg = document.querySelector('.guessing-msg');
const guessedNumber = document.querySelector(
  '.guessing-number'
);
const title = document.querySelector('.title');
const score = document.querySelector('.score-number');
const highScore = document.querySelector(
  '.high-score-number'
);
const body = document.querySelector('body');

//Variables

let scoreNumber = 20;
let highScoreNumber = 0;
const low = 1;
const high = 20;
const randomNumber = () =>
  Math.trunc(Math.random() * (high - low + 1)) + low;

let randomVal = randomNumber();
score.textContent = scoreNumber;
highScore.textContent = highScoreNumber;

generalText.textContent = `(Between ${low} and ${high})`;

//Check Button

checkBtn.addEventListener('click', function (e) {
  const userVal = Number(userInput.value);
  if (userVal === randomVal) {
    guessedMsg.textContent = 'Hurrah!!!!';
    title.textContent = 'Correct Answer';
    guessedNumber.textContent = randomVal;
    if (highScoreNumber < scoreNumber) {
      highScoreNumber = scoreNumber;
      highScore.textContent = highScoreNumber;
    }

    body.style.backgroundColor = '#ffa502';
    checkBtn.disabled = true;
    checkBtn.style.cursor = 'not-allowed';
  } else if (userVal !== randomVal) {
    if (scoreNumber > 1) {
      scoreNumber--;
      score.textContent = scoreNumber;
      guessedMsg.textContent =
        userVal > randomVal
          ? `It's Too High`
          : `It's Too Low`;
    } else {
      score.textContent = 0;
      title.textContent = 'Sorry PLease Try Again';
      body.style.backgroundColor = '#ff4757';
      guessedNumber.textContent = randomVal;
      checkBtn.disabled = true;
      checkBtn.style.cursor = 'not-allowed';
    }
  }
});

//Reset Button

resetBtn.addEventListener('click', function (e) {
  checkBtn.disabled = false;
  checkBtn.style.cursor = 'pointer';
  body.style.backgroundColor = '';
  userInput.value = '';
  scoreNumber = 20;
  score.textContent = scoreNumber;
  randomVal = randomNumber();
  title.textContent = 'Guess my Number!';
  guessedNumber.textContent = '?';
  guessedMsg.textContent = 'Start guessing....';
});
