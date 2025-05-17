// Confetti Animation Function
function createConfetti() {
    let confettiContainer = document.querySelector('.confetti-wrapper');
    let numConfetti = 50; // Number of confetti pieces
    for (let i = 0; i < numConfetti; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Start confetti animation
createConfetti();
