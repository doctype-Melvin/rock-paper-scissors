const RPS = (() => {
const rps = 
    [
        {
            name: 'rock',
            icon: '✊',
            beats: 'scissors'
        },
        {
            name: 'paper',
            icon: '✋',
            beats: 'rock'
        },
        {
            name: 'scissors',
            icon: '🖖',
            beats: 'paper'
        }
    ];
//Computer choice function
const cpuChoice = () => rps[Math.floor(Math.random()*rps.length)]
//Player icons
const choices = document.querySelectorAll('.icon');

//Scores
const playerScore = document.querySelector('#ply-score');
const cpuScore = document.querySelector('#cpu-score');

//Game display
const result = document.querySelector('.roundResult');
const history = document.querySelector('.gameHistory');

//Player choice initiates first round
const playerChoice = (e) => {
    let choice = rps.find(el => el.name === e.target.id)
    playRound(choice);
}
//Add event listeners to icons 
choices.forEach(button => button.addEventListener('click', playerChoice));
//Removes event listeners and triggers pop up
const gameOver = () => {
    choices.forEach(button => button.removeEventListener('click', playerChoice));
    const popup = document.querySelector('.popup');
    popup.style.display = 'block'
}
const playRound = (player, cpu) => { //Takes the objects and passes them for winner evaluation
    this.player = player;
    cpu = cpuChoice();
        let playerWin = whoWins(player, cpu);
        let cpuWin = whoWins(cpu, player);
            if(playerWin) {
                trackScore(playerScore);
                let text = `beats`;
                showResult(player, text, cpu)
            }
            else if(cpuWin) {
                trackScore(cpuScore);
                let text = `beaten by`;
                showResult(player, text, cpu)
            }
            else draw(player, cpu);
}

const whoWins = (winner, loser) => { //Evaluates winner
    return winner.beats === loser.name
}

const draw = (player, cpu) => { //Draw scenario
    let text = `It's a draw`;
    showResult(player, text, cpu)
}

const trackScore = (winner) => { //Takes winner score and adds 1
    winner.innerText = parseInt(winner.innerText)+1;
    if(parseInt(winner.innerText) === 5) gameOver();
    return winner.innerText;
}

//Adds round outcome display
let pHand = document.createElement('div');
pHand.classList.add('pResult');
    let cHand = document.createElement('div');
    cHand.classList.add('cResult');
        let textResult = document.createElement('div');
        textResult.classList.add('textResult');
        result.append(pHand, textResult, cHand);
const showResult = (ply, text, cpu) => {
    pHand.textContent = ply.icon;
    cHand.textContent = cpu.icon;
    textResult.textContent = text
}

//Restart button
let button = document.createElement('button');
button.classList.add('restart');
button.textContent = 'Restart';

})()