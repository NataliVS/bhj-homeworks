const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let currentHole = null;

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

function moveMole() {
    if (currentHole) {
        currentHole.classList.remove('hole_has-mole');
    }
    const randomHoleIndex = Math.floor(Math.random() * 9) + 1;
    currentHole = document.getElementById(`hole${randomHoleIndex}`);
    currentHole.classList.add('hole_has-mole');
    setTimeout(moveMole, 1000 + Math.random() * 1000);
}

moveMole();