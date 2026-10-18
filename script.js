const textToType = "Low-level dev. C, Rust, ASM. Kernel explorer.";
const typewriterElement = document.getElementById('typewriter');
const cursorElement = document.querySelector('.cursor');
const ipDisplay = document.getElementById('ip-display');

let i = 0;

cursorElement.style.display = 'none';

function typeWriter() {
    if (i < textToType.length) {
        typewriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 30); 
    } else {
        cursorElement.style.display = 'inline-block';
    }
}

async function fetchIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipDisplay.textContent = `IP: ${data.ip}`;
    } catch (error) {
        ipDisplay.textContent = 'IP: HIDDEN';
    }
}

window.onload = () => {
    setTimeout(typeWriter, 500);
    fetchIP();
};