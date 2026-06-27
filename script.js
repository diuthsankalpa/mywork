const bgMusic = document.getElementById('bgMusic');
const audioIcon = document.getElementById('audioIcon');
const doorContainer = document.getElementById('doorContainer');
const countdownText = document.getElementById('countdownText');

let countdownTime = 3;

// 1. Automatic 3-Second Opening Countdown Timer
const timerInterval = setInterval(() => {
    countdownTime--;
    countdownText.innerText = countdownTime;

    if (countdownTime <= 0) {
        clearInterval(timerInterval);
        openDoors();
    }
}, 1000);

// 2. Door Open Logic & Autoplay Core Action
function openDoors() {
    doorContainer.classList.add('open');
    
    // Autoplay trigger (initially muted for safety)
    bgMusic.play().then(() => {
        console.log("Audio playing inside active DOM workflow.");
    }).catch(err => {
        console.log("Browser policy requested standard touch action first.", err);
    });
}

// 3. Audio Control Toggle
function toggleAudio() {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        audioIcon.className = 'fas fa-volume-up';
        bgMusic.play();
    } else {
        if (bgMusic.paused) {
            bgMusic.play();
            audioIcon.className = 'fas fa-volume-up';
        } else {
            bgMusic.pause();
            audioIcon.className = 'fas fa-volume-mute';
        }
    }
}

// 4. Smart Interaction Handler: Activates audio automatically if user interacts with page
document.body.addEventListener('click', () => {
    if (doorContainer.classList.contains('open') && bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.play();
        audioIcon.className = 'fas fa-volume-up';
    }
}, { once: true });