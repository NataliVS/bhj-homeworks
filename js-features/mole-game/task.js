const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function resetGame(message) {
    alert(message);
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = function() { 
        if (this.classList.contains('hole_has-mole')) {
            deadCounter.textContent = +deadCounter.textContent + 1;
            if (+deadCounter.textContent === 10) resetGame('Вы победили!');
        } else {
            lostCounter.textContent = +lostCounter.textContent + 1;
            if (+lostCounter.textContent === 5) resetGame('Вы проиграли!');
        }
    };
}