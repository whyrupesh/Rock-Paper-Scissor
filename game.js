

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



function game(comp,user){
    if(comp==user){
        result="Game ties!";
    }
    else if(comp=="rock"){
        user=="paper"? result="You win!" : result="You lose!";
    }
    else if(comp=="paper"){
        user =="rock"? result="You lose!":result="You win!";
    }
    else if(comp == "scissor"){
        user =="rock"? result="You win!":result="You lose!";
    }
    else{
        result = "not found";
    }
    return result;
}

function yourchoice(a) {
    let y = document.querySelector("#your-box");
    y.innerText = a;
}

function compchoice(a) {
    let y = document.querySelector("#comp-box");
    y.innerText = a;
}

function showresult(a) {
    let y = document.querySelector("#result-box");
    y.innerText = a;
}


function allgame(a){
    yourchoice(a);
    let temp = getComputerChoice();
    compchoice(temp);
    let tempResult = game(temp,a);
    showresult(tempResult);

}

let rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
    allgame("rock");
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    allgame("paper");
});

let scissor = document.querySelector("#scissor");
scissor.addEventListener("click", function() {
    allgame("scissor");
});






//when rps is clicked --> it get comp choice
//--> print both comp choice and user choice in respective box.
// --> it will compare with user choice 
// --> annouce result in result box.








