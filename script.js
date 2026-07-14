// Target: Next 23 May
function getTargetDate() {
    const now = new Date();
    let target = new Date(now.getFullYear(), 4, 23, 0, 0, 0); // May = 4

    if (now > target) {
        target = new Date(now.getFullYear() + 1, 4, 23, 0, 0, 0);
    }

    return target;
}

function updateCountdown() {

    const now = new Date();
    const target = getTargetDate();

    let diff = target - now;

    if (diff < 0) diff = 0;

    const totalSeconds = Math.floor(diff / 1000);

    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    const totalDays = Math.floor(totalSeconds / 86400);

    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    document.getElementById("months").innerHTML = String(months).padStart(2,"0");
    document.getElementById("days").innerHTML = String(days).padStart(2,"0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2,"0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2,"0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2,"0");

    // Progress Ring

    const start = new Date(target.getFullYear()-1,4,23);

    const totalYear = target - start;
    const passed = now - start;

    let percent = (passed/totalYear)*100;

    percent = Math.max(0,Math.min(100,percent));

    document.getElementById("percent").innerHTML =
        Math.floor(percent)+"%";

    const circle = document.getElementById("progressCircle");

    const circumference = 502;

    const offset =
        circumference -
        (percent/100)*circumference;

    circle.style.strokeDashoffset = offset;

}

updateCountdown();

setInterval(updateCountdown,1000);
