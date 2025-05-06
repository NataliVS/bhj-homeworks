const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isCookieBig = false;

cookie.addEventListener('click', function() {

    clickCount++;
    counter.textContent = clickCount;
    if (isCookieBig) {
        cookie.width = 200;
    } else {
        cookie.width = 250; 
    }
    
    isCookieBig = !isCookieBig; 
});