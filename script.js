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
    if (count === 5) {
        choices.forEach(button => button.removeEventListener('click', playerChoice))
    }
    let choice = rps.find(el => el.name === e.target.id)
    playRound(choice.name);
}
choices.forEach(button => button.addEventListener('click', playerChoice));

const playRound = (player, cpu) => {
    this.player = player;
    cpu = cpuChoice();
}

})()