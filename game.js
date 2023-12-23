

function getComputerChoice(){
   let a = Math.floor(Math.random()*3+1);
   if(a==1){
    return "rock";
   }
   else if(a==2){
    return "paper";
   }
   else{
    return "scissor";
   }
}

function playerSelection(){
    // const prompt = require('prompt-sync')();

    let user= prompt('Choose bw rock/paper/scissor?');
    
    return user;
}

function game(comp,user){
    if(comp==user){
        console.log("GAME ties");
    }
    else if(comp=="rock"){
        user=="paper"? result="win" : result="lose";
    }
    else if(comp=="paper"){
        user =="rock"? result="lose":result="win";
    }
    else if(comp == "scissor"){
        user =="rock"? result="win":result="lose";
    }
    else{
        result = "not found";
    }
    return result;
}

let comp = getComputerChoice();
let user = playerSelection();


console.log("computer's choice: ",comp);
console.log("Your's choice: ",user);
console.log("You",game(comp,user),"!");
let outputMessage = game(comp,user);
let output = `You ${outputMessage} `;


let outputContainer = document.getElementById('output-container');
outputContainer.textContent = output;









