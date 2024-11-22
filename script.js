let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random= Math.floor(Math.random() * 3);
    if(random===0){
        return "rock";
    }

    if(random===1){
        return "paper";
    }
    
    if(random===2){
        return "scissors";
    }
}

function getHumanChoice(){
    let choise;
    while(true){
    choise = prompt("choose between paper rock or scissors");
    choise=choise.toLowerCase();
    if (choise==="paper" || choise==="rock" || choise==="scissors" ){
        return choise;
    }
    }

}

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        alert("even , the computer has chose " + computerChoice + " and you have chose " + humanChoice + " the score is you: " + humanScore + " computer: " + computerScore )
    }
    else if (humanChoice==="rock" && computerChoice === "scissors" || humanChoice==="paper" && computerChoice === "rock" || humanChoice==="scissors" && computerChoice==="paper"  ){
        humanScore ++;
        alert("congratulations you won " + humanChoice + " won on " + computerChoice + " the score is you: " + humanScore + " computer: " + computerScore);
    }
    else{
        computerScore ++;
        alert("you lose " + computerChoice + " won on " + humanChoice + " the score is you: " + humanScore + " computer: " + computerScore);
    }
}

function playGame(){
    for (let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore===computerScore){
        alert("Even : you " + humanScore + " Computer: " + computerScore )
    }
    else if (humanScore>= computerScore){
        alert("Congratulation you won, you :  " + humanScore + " Computer: " + computerScore)
    }

    else{
        alert("Sorry you lose, you :  " + humanScore + " Computer: " + computerScore)
    }
}


playGame();