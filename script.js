// point to all correct answers!!
const ans1 = document.getElementById("q1a");
const ans2 = document.getElementById("q2c");
const ans3 = document.getElementById("q3a");
const ans4 = document.getElementById("q4b");

//all other remaining options
const q1b = document.getElementById("q1b");
const q1c = document.getElementById("q1c");
const q2a = document.getElementById("q2a");
const q2b = document.getElementById("q2b");
const q3b = document.getElementById("q3b");
const q3c = document.getElementById("q3c");
const q4a = document.getElementById("q4a");
const q4c = document.getElementById("q4c");

const resultMsg = document.getElementById("showResult");

// ----------calculate total score-------------
let score = 0;
function total() {
  if (ans1.checked) {
    score = score + 1;
  }
  if (ans2.checked) {
    score = score + 1;
  }
  if (ans3.checked) {
    score = score + 1;
  }
  if (ans4.checked) {
    score = score + 1;
  }
  if (score > 0) {
    const quizDiv = document.getElementById("quiz-div");
    quizDiv.style.display = "none";
    submitBtn.style.display = "none";
    resultMsg.innerHTML = ` "Your score is ${score}   /5." `;
    if (score < 3) {
      resultMsg.innerHTML = ` "Your score is ${score}   /5. Sorry! You failed the Quiz." `;
    }
    if (score > 3) {
      resultMsg.innerHTML = ` "Your score is ${score}   /5. Congratulations! You passed the Quiz." `;
    }
  }
  timeDetails.style.display = "none";

  return score;
}

//------------form validation-----------
function check() {
  if (ans1.checked) {
  } else if (ans2.checked) {
  } else if (ans3.checked) {
  } else if (ans4.checked) {
  } else if (q1b.checked) {
  } else if (q1c.checked) {
  } else if (q2a.checked) {
  } else if (q2b.checked) {
  } else if (q3b.checked) {
  } else if (q3c.checked) {
  } else if (q4a.checked) {
  } else if (q4c.checked) {
  } else {
    alert("please select at least 1 answer!");
  }
  return;
}

// ---------When clicked on Submit Button-----------
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", check);
submitBtn.addEventListener("click", total);

const startBtn = document.getElementById("start-btn");
const countdown = document.getElementById("countdown");

//start quiz function
const startQuiz = () => {
  let time = 10;
  const printMe = () => {
    time--;
    countdown.innerHTML = `${time}`;

    return time;
  };
  let id = setInterval(printMe, 1000);

  //stop timer function
  const stopInterval = () => {
    let timesUp = document.getElementById("timeUp");
    let timeDetails = document.getElementById("timeDetails");
    let loadingDetails = document.getElementById("loading");
    timesUp.style.display = "block";
    timeDetails.style.display = "none";

    const quizDiv = document.getElementById("quiz-div");
    quizDiv.style.display = "none";
    // loadingDetails.style.display = "none";
    submitBtn.style.display = "none";

    // resultMsg.innerHTML = ` "Your score is ${score}   /5." `;

    if (score < 3) {
      resultMsg.innerHTML = ` "Your score is ${score}   /5. Sorry! You failed the Quiz." `;
    }

    if (score > 3) {
      resultMsg.innerHTML = ` "Your score is ${score}   /5. Congratulations! You passed the Quiz." `;
    }

    if (time <= 0) {
      clearInterval(id);
    }
  };
  setTimeout(stopInterval, 10000);

  let quizPage = document.getElementById("quiz-page");
  quizPage.style.display = "block";

  let welcomeDiv = document.getElementById("welcomeMsg");
  welcomeDiv.style.display = "none";
  startBtn.style.display = "none";
};

//click to start quiz
startBtn.addEventListener("click", startQuiz);
