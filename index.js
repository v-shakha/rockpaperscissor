function getComputerChoice(){
    let random = Math.floor(Math.random()*3+1);
    if(random==1)
        return "rock";
    else if(random == 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock"){
        if(computerSelection=="scissors"){
            return "win"
        }
        else if(computerSelection=="paper"){
            return "lose"
        }
        else{
            return "draw"
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection=="rock"){
            return "lose"
        }
        else if(computerSelection=="paper"){
            return "win"
        }
        else{
            return "draw"
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection=="rock"){
            return "win"
        }
        else if(computerSelection=="scissors"){
            return "lose"
        }
        else{
            return "draw"
        }
    }
    else{
        return "wrong";
    }
}
function playGame(){
    let player = 0;
    let computer = 0;
    for(i=0;i<5;i++){
        let playerSelection = prompt("Choose one");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection,computerSelection);
        switch (roundResult) {
            case "win":
                console.log("You win!"+playerSelection+" beats "+computerSelection);
                player++;
                break;
            case "lose":
                console.log("You lose!"+computerSelection+" beats "+playerSelection);
                computer++;
                break;
            case "draw":
                console.log("Draw!");
                break;
            default:
                console.log("Wrong input");
                break;

        }
    }
    if(computer>player){
        console.log("Computer wins");
    }
    else if(player>computer)
        console.log("You win");
    else
        console.log("Tie");
}
playGame();