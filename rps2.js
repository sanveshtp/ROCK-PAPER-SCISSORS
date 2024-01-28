let userScore = 0;
let compScore = 0;

let userScoreCard = document.getElementById("user_score");
let compScoreCard = document.getElementById("comp_score");
let startBox = document.getElementById("start_box");
let startButton = document.getElementById("start");

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreCard.innerText = userScore;
    compScoreCard.innerText = compScore;
    startButton.innerText = "start again";
})

const choices = document.querySelectorAll('.choice');

const generateCompChoice = () => {
    const choicesArr = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArr[randomIndex];
}

const drawGame = (choice) => {
    startButton.innerText = `it's a draw, both chose ${choice}`;
    startButton.style.backgroundColor = "black";
    startButton.style.color = "#C28EDD";
}

const userWins = () => {
    userScore += 1;
    startBox.firstElementChild.innerText = "user is winner";
    startButton.style.color = "#DEF2C8";
    startButton.style.backgroundColor = "#7209B7";
}

const compWins = () => {
    compScore += 1;
    startBox.firstElementChild.innerText = "computer is winner";
    startButton.style.color = "#7209B7";
    startButton.style.backgroundColor = "#DEF2C8";
}

const playGame = (choiceId) => {
    const compChoice = generateCompChoice();
    if (compChoice === choiceId) {
        document.body.style.backgroundColor = "#DEF2C8";
        drawGame(compChoice);
    }
    if (choiceId === "rock") {
        if (compChoice === "paper") {
            document.body.style.backgroundColor = "#c28edd";
            compWins();
        } else if (compChoice === "scissor") {
            document.body.style.backgroundColor = "#f083a2";
            userWins();
        }
    } else if (choiceId === "scissor") {
        if (compChoice === "rock") {
            document.body.style.backgroundColor = "#f083a2";
            compWins();
        } else if (compChoice === "paper") {
            document.body.style.backgroundColor = "#7fadfe";
            userWins();
        }
    } else if (choiceId === "paper") {
        if (compChoice === "scissor") {
            document.body.style.backgroundColor = "#7fadfe";
            compWins();
        } else if (compChoice === "rock") {
            document.body.style.backgroundColor = "#c28edd";
            userWins();
        }
    }
    reset.style.display = "inline";
}

choices.forEach((element) => {
    element.addEventListener("click", () => {
        const choiceId = element.getAttribute("id");
        playGame(choiceId);
        userScoreCard.innerText = userScore;
        compScoreCard.innerText = compScore;
    })
});