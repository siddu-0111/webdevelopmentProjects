let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let uscore = document.querySelector("#user");
let cscore = document.querySelector("#comp");

const genCompChoices = () => {
    const options = ["rock" , "paper" , "scissiors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        msg.style.backgroundColor = "#00ff00";
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        uscore.innerText = `${userScore}`;
    } else {
        compScore++;
        msg.style.backgroundColor = "#ff0000";
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        cscore.innerText = `${compScore}`;
    }
}

const drawGame = (userChoice) => {
    msg.computedStyleMap.backgroundColor = "#081b31";
    msg.innerText = `Game was Drawn! ${userChoice} draws ${compChoice}`;
}

const playGame = (userChoice) => {
    const compChoice = genCompChoices();
    if(userChoice === compChoice) {
        drawGame(userChoice);
        return;
    }
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        userWin = compChoice === "scissiors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked " + userChoice);
        playGame(userChoice);
    });
});