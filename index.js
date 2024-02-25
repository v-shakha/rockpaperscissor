let buttons = document.querySelectorAll(".btn");
let result = document.querySelector('.result');
let count = 1;
let player = 0;
let computer = 0;
// console.log(buttons);
buttons.forEach((button) => {
    console.log(button.value);
    button.addEventListener('click',function(){playRound(button.value,getComputerChoice())});
    console.log("added");
});

// result.textContent(" ");
console.log(result);

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
    if(count == 1)
        result.textContent = " ";
    if(playerSelection == "rock"){
        if(computerSelection=="scissors"){
            result.textContent += "win ";
            console.log("ok");
            count++;
            player++;
        }
        else if(computerSelection=="paper"){
            result.textContent +="lose ";
            console.log("ok");
            count++;
            computer++;
        }
        else{
            result.textContent +="draw ";
            console.log("ok");
            count++;
            computer++;
            player++;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection=="rock"){
            result.textContent +="lose ";
            count++;
            computer++;
        }
        else if(computerSelection=="paper"){
            result.textContent +="win ";
            count++;
            player++;
        }
        else{
            result.textContent +="draw ";
            count++;
            computer++;
            player++;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection=="rock"){
            result.textContent +="win ";
            count++;
            player++;
        }
        else if(computerSelection=="scissors"){
            result.textContent +="lose ";
            count++;
            computer++;
        }
        else{
            result.textContent +="draw ";
            count++;
            computer++;
            player++;
        }
    }
    else{
        result.textContent +="wrong";
        count++;
    }
    if(count == 5){
        if(player>computer){
            result.textContent += "\r\n Player wins ";
            
        }
        else
            result.textContent += "\n Computer wins";
        player = 0;
        computer = 0;
        count = 1;
    }
}


