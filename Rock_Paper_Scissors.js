let userScore = 0;
let compScore = 0;
let body = document.querySelector("body");

let choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
let button = document.querySelector("button");

userScoreValue = document.querySelector("#userScore");
compScoreValue = document.querySelector("#compScore");

button.addEventListener("click",() =>{
  console.log("REPLAY !!");
  userScore = 0;
  compScore = 0;
  userScoreValue.innerText = userScore;
  compScoreValue.innerText = compScore;
});


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
    console.log(`User Choice = ${userChoice}`);
    //GENERATE COMPUTER'S CHOICE
    compChoice = genCompChoice();
    console.log(`Computer Choice = ${compChoice}`);

    if(userChoice === compChoice){
        console.log("Game is Draw !!");
        msg.innerText = "Game is Draw !! Play Again.";
        msg.style.backgroundColor = "#dc8560";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //paper, rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) =>{
    
    if(userWin === true){
        userScore++;
        userScoreValue.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You win this time ! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreValue.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lose this time ! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
    //rock, paper & scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}







