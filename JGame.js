const buttons = document.querySelectorAll('button')
let computerScore =0;
let playerScore= 0;

buttons.forEach((button) => {
        
    button.addEventListener('click', () =>{

    let computerSelection = computerPlay();
    playerSelection = button.id;
    playRound(playerSelection,computerSelection);
    
    if(computerScore ==5) {
        button.disabled =true;
        document.getElementById('winner').innerHTML = "You Loose , better luck next time! refresh page to play again";
    }else if(playerScore ==5){
        button.disabled =true;   
        document.getElementById('winner').innerHTML = "You Win! refresh page to play again";
}

    });

});

const computerSelection = computerPlay();
// computer selection passed on to another function, computer play.
    function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
        // array of three choices
        let index = Math.floor(Math.random() * choices.length);
        // picks ranom number, within th array "choices" length
        let computerSelection = choices[index];
        /* declared coomputerSelection to be any of
         the random indexes from the array"choices"*/
        return computerSelection;
    }

    function win(playerSelection, computerSelection){
        let compute= playerSelection.length - computerSelection.length ;
        /* compares lengths of the Strings. one is gotten from the user and another
         from the function computer play */
         
        let winner=false;
        // made boolean expression start with false;
        if((compute>0 || compute==-4)&& !(compute==4) ){
            // conditions to be met in order for the win to be true
            winner= true;
        }else if(compute<0 || compute==4) {
            winnner= false;
            // i guess keep the variable the same could inproved but works perfectly
        }
    
        return winner; 
    }



    function playRound(playerSelection, computerSelection) {
        let statment = "";
        
        if (playerSelection == computerSelection) {
            statment += "Tie, both picked " + computerSelection;
            // if both player and computer had the same results just print them and say they the same
        } else if(win(playerSelection ,computerSelection)){
            // pass through win function 
            statment += "you win " + playerSelection+ " beats " +computerSelection;
            // if win comes back true reeturn this statement
            playerScore +=1;

        }else if(!(win(playerSelection,computerSelection))){
            // if the win function retruns false print this 
            statment += "you lose "+ computerSelection +" beats " + playerSelection;
            computerScore +=1;
        }


       let scoreBoard = '<br>' +'PlayerScore: ' + playerScore + ' <br>  Computer Score: ' + computerScore;

        document.getElementById('Results').innerHTML= statment  + scoreBoard;

        
        return statment;
    }



