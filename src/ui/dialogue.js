import { dialogueText } from '../constants.js';
import { gameState } from '../index.js';

// TypeText effect using an iterative approach with proper interruption
export function typeText(
    content = "Please submit some text...",
    element = dialogueText,
    speed = 15
) {
    clearInterval(gameState.typingInterval);              // Stop any ongoing typing effect
    element.innerHTML = "";                               // Clear existing text before starting new typing effect
    speed = gameState.currentTypingSpeed / 50 * speed;    // Adjust speed based on user settings

    // Hide continue marker while typing
    const continueMarker = document.querySelector('.continue-marker');
    if (continueMarker) {
        continueMarker.style.visibility = 'hidden';
    }

    // Start typing effect
    let index = 0;
    gameState.typingInterval = setInterval(() => {
        if (index < content.length) {
            element.innerHTML += content.charAt(index);
            index++;
        } else {
            clearInterval(gameState.typingInterval); // Stop when done typing
            
            // Show continue marker after typing is complete
            if (continueMarker) {
                continueMarker.style.visibility = 'visible';
            }
        }
    }, speed);
} 