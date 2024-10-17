// Game Variables 
let playerScore = 0; 
let computerScore = 0; 
let roundsLeft = 10; 

// Choices for the game 
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 

// Elements 
const resultMessage = document.getElementById('result-message'); 
const playerScoreElement = document.getElementById('player-score'); 
const computerScoreElement = document.getElementById('computer-score'); 
const roundsLeftElement = document.getElementById('rounds-left'); 
const restartButton = document.getElementById('restart'); 
const choiceButtons = document.querySelectorAll('.choice'); 

// Restart the game 
restartButton.addEventListener('click', restartGame); 

// Add event listeners to the choices 
choiceButtons.forEach(button => { 
    button.addEventListener('click', () => playRound(button.id)); }); 
    
// Function to restart the game 
function restartGame() { 
    playerScore = 0; 
    computerScore = 0; 
    roundsLeft = 10; updateScore(); 
    resultMessage.textContent = 'Make your move!'; 
} 

// Function to play one round 
function playRound(playerChoice) { 
    if (roundsLeft === 0) { 
        resultMessage.textContent = 'Game Over! Restart to play again.'; 
        return; 
    } 
    
    const computerChoice = choices[Math.floor(Math.random() * 5)]; 
    const result = getRoundResult(playerChoice, computerChoice); 
    
    if (result === 'win') { 
        playerScore++; 
        resultMessage.textContent = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`; 
    } else if (result === 'lose') { 
        computerScore++; 
        resultMessage.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`; 
    } else { 
        resultMessage.textContent = `It's a draw! You both chose ${capitalize(playerChoice)}.`; 
} 

roundsLeft--; 
updateScore(); 

if (roundsLeft === 0) { 
    resultMessage.textContent += ' Game over!'; 
} } 

// Function to get the round result 
function getRoundResult(player, computer) { 
    if (player === computer) return 'draw'; 
    
    const winConditions = { rock: ['scissors', 'lizard'], 
                            paper: ['rock', 'spock'], 
                            scissors: ['paper', 'lizard'], 
                            lizard: ['paper', 'spock'], 
                            spock: ['scissors', 'rock'] }; 
                            
    return winConditions[player].includes(computer) ? 'win' : 'lose'; } 
    
    // Function to update the score display 
    function updateScore() { 
        playerScoreElement.textContent = `Player: ${playerScore}`; 
        computerScoreElement.textContent = `Computer: ${computerScore}`; 
        roundsLeftElement.textContent = `Rounds Left: ${roundsLeft}`; 
    } 
    
    // Helper function to capitalize words 
    function capitalize(word) { 
        return word.charAt(0).toUpperCase() + word.slice(1); 
    }