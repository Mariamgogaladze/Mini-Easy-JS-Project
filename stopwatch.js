const secondsDisplay = document.getElementById("seconds");
const tensDisplay = document.getElementById("tens");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Make variables 

let intervalId;
let seconds = 0;
let tens = 0;

function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(incrementTimer , 10)
}

function stopTimer(){
    clearInterval(intervalId);
}

function resetTimer(){
    clearInterval(intervalId);
    tens = 0;
    seconds = 0; 
    updateDisplay()
}

function updateDisplay(){
    secondsDisplay.textContent = seconds.toString().padStart(2,"0");
    tensDisplay.textContent = tens.toString().padStart(2,"0");
}

function incrementTimer(){
    tens++
    if(tens >= 100){
       tens = 0 ;
       seconds ++
    }
    updateDisplay()
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);