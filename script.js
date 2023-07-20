const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector('#machine-score')
const beginMessage = document.querySelector(".begin-message")
const humanImage = document.querySelector(".human-image")
const machineImage = document.querySelector(".machine-image")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    beginMessage.style.visibility = "hidden";


    if (humanChoice === 'paper') {
        humanImage.src = 'assets/paper_left.png';
    } else if (humanChoice === 'rock') {
        humanImage.src = 'assets/rock_left.png';
    } else {
        humanImage.src = 'assets/scissors_left.png';
    }
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randowNumber = Math.floor(Math.random() * 3)
    return choices[randowNumber]



}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + "maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if
        (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!!&#x1F44F;&#x1F3FC"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!!&#x1F62D"
    }

    if (machine === 'paper') {
        machineImage.src = 'assets/paper_rigth.png';
    } else if (machine === 'rock') {
        machineImage.src = 'assets/rock_rigth.png';
    } else {
        machineImage.src = 'assets/scissors_rigth.png';
    }
}

