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
const cpuScore = document.querySelector('#cpu-score')

//Player choice initiates first round
const playerChoice = (e) => {
    if ((parseInt(playerScore.innerText) === 5 && parseInt(cpuScore.innerText) < 5) || 
        (parseInt(cpuScore.innerText) === 5 && parseInt(playerScore.innerText) < 5)) {//After 5 wins remove event listeners
        choices.forEach(button => button.removeEventListener('click', playerChoice))
    }
    let choice = rps.find(el => el.name === e.target.id)
    
    playRound(choice);
}
//Add event listeners to icons 
choices.forEach(button => button.addEventListener('click', playerChoice));

const playRound = (player, cpu) => { //Takes the objects and passes them for winner evaluation
    this.player = player;
    cpu = cpuChoice();
        let playerWin = whoWins(player, cpu);
        let cpuWin = whoWins(cpu, player);
            if(playerWin) {
                trackScore(playerScore)
            }
            else if(cpuWin) {
                trackScore(cpuScore)
            }
            else draw()
}

const whoWins = (winner, loser) => { //Evaluates winner
    return winner.beats === loser.name
}

const draw = () => { //Draw scenario
    console.log(`draw`)
}

const trackScore = (winner) => { //Takes winner score and adds 1
    winner.innerText = parseInt(winner.innerText)+1
    return winner.innerText
}
})()