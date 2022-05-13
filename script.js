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

const cpuChoice = () => rps[Math.floor(Math.random()*rps.length)]

const choices = document.querySelectorAll('.icon');
//Temporary setup with counter to remove event listener
let count = 0;
const playerChoice = (e) => {
    count++
    if (count === 5) {//After 5 rounds remove event listeners
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
            if(playerWin) {console.log(`Player wins`)}
            else if(cpuWin) {console.log(`Computer wins`)}
            else draw()
}

const whoWins = (winner, loser) => { //Evaluates winner
    return winner.beats === loser.name
}

const draw = () => { //Draw scenario
    console.log(`draw`)
}
})()