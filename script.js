const bgMusic = document.getElementById('bgMusic');
const audioIcon = document.getElementById('audioIcon');
const doorContainer = document.getElementById('doorContainer');
const countdownText = document.getElementById('countdownText');
const startAction = document.getElementById('startAction');
const countdownArea = document.getElementById('countdownArea');

let countdownTime = 3;

// 💡 User බටන් එක ක්ලික් කරාම රන් වෙන Function එක
function startOurJourney() {
    // 1. බටන් එක හංගලා, Countdown එක ස්ක්‍රීන් එකට ගන්නවා
    startAction.classList.add('d-none');
    countdownArea.classList.remove('d-none');

    // 2. 3, 2, 1 Countdown එක පටන් ගන්නවා
    const timerInterval = setInterval(() => {
        countdownTime--;
        countdownText.innerText = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(timerInterval);
            openDoors(); // කවුන්ට් එක 0 වුණාම දොරවල් අරිනවා
        }
    }, 1000);
}

// 3. දොර ඇරෙන සහ සින්දුව 100% ක් ප්ලේ වෙන කොටස
function openDoors() {
    doorContainer.classList.add('open');
    
    // බටන් එක ක්ලික් කරලා ආපු නිසා සින්දුව මෙතනදී කිසිම බ්ලොක් එකක් නැතුව සද්දෙන්ම ප්ලේ වෙනවා!
    bgMusic.play().then(() => {
        audioIcon.className = 'fas fa-volume-up';
    }).catch(err => {
        console.log("Audio playback error: ", err);
    });
}

// 4. සින්දුව On/Off කරන Button Logic එක
function toggleAudio() {
    if (bgMusic.paused) {
        bgMusic.play();
        audioIcon.className = 'fas fa-volume-up';
    } else {
        bgMusic.pause();
        audioIcon.className = 'fas fa-volume-mute';
    }
}
