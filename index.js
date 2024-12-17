
const targetDate = new Date("December 24, 2024 00:00:00").getTime();


const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("Dager").innerHTML = days;
    document.getElementById("timer").innerHTML = hours;
    document.getElementById("minuter").innerHTML = minutes;
    document.getElementById("sekunder").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "It's Christmas!";
    }
}, 1000);
