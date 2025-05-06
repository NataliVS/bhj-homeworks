const timerElement = document.getElementById("timer");
let timeLeft = 50;

function updateTimer() {
  let timeLeft = parseInt(timerElement.textContent);
  
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = timeLeft;
  } else {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);