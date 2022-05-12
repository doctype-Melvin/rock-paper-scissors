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

const cpuChoice = rps[Math.floor(Math.random()*rps.length)]

const choices = document.querySelectorAll('.icon')
console.log(choices)
})()