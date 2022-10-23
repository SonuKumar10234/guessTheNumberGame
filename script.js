const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber" , randomNumber);

let inputval = document.getElementById('input_val');
let button = document.querySelector('.btn');
let smallTag = document.getElementById('small'); 
let score = document.getElementById('score'); 
let spanTag = document.getElementById('span'); 
let retryButton = document.querySelector('.retry');
let scoreContainer = document.querySelector('.score-container');
let noOfGuess = 0;
let totalAttempts = 10;
let leftAttempts = 0;

leftAttempts = totalAttempts;
spanTag.innerHTML = `You have ${leftAttempts} attemps.`

button.addEventListener('click',()=>{
    
    let val = inputval.value.trim();

    //To check if the string contains only numbers, we’ll have to use a different regular expression – ^\d+$:
    function containsOnlyNumbers(val) {
        return /^\d+$/.test(val);
    }
    

    if(val == "" || !containsOnlyNumbers(val)){
        alert("Please enter a number between 1 and 100");
    }
    else{
       
        scoreContainer.classList.add("visible");
        if(val > randomNumber){
            smallTag.innerHTML = "Please enter smaller number.";
            noOfGuess++;
            leftAttempts = totalAttempts - noOfGuess;
            spanTag.innerHTML = `You have left ${leftAttempts} attemps only.`
        }
        else if(val < randomNumber){
            smallTag.innerHTML = "Please enter higher number.";
            noOfGuess++;
            leftAttempts = totalAttempts - noOfGuess;
            spanTag.innerHTML = `You have left ${leftAttempts} attemps only.`
            
        }
        else{
           if(noOfGuess<=totalAttempts){
             smallTag.innerHTML = "Conguration! You guessed the actual Number.";
             score.innerHTML = `You guessed the number in ${noOfGuess+1} attempts.`;
             spanTag.innerHTML = `You have left ${leftAttempts-1} attemps only.`
             button.classList.add ("disabled");
             retryButton.classList.add("visible")
           }
           
        }
        
    }
    if(noOfGuess === totalAttempts){
        smallTag.innerHTML = "You Loose the game";
        button.classList.add ("disabled");
        retryButton.classList.add("visible")
    }

});

function reStart(){
    leftAttempts = totalAttempts;
    noOfGuess = 0;
    spanTag.innerHTML = `You have ${leftAttempts} attemps.`
    inputval.value = "";
    smallTag.innerHTML = "";
    score.innerHTML = "";
    button.classList.remove("disabled");
    scoreContainer.classList.remove("visible");
    retryButton.classList.remove("visible");
}
