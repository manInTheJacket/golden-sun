let countdown = 5;
const countdownElement = document.getElementById('countdown');
const redirectMessage = document.getElementById('redirectMessage');

const timer = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = 'index.html'; 
    }
}, 1000);   