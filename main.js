var choices = ["paper", "rock", "scissors",'lizard','spock'];
var i = Math.floor(Math.random() * 5);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	if(word === "scissors")return '<i class="far fa-hand-scissors"></i>';
    if(word === "lizard")return '<i class="far fa-hand-lizard"></i>';
    if(word === "spock")return '<i class="far fa-hand-spock"></i>';
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "scissors" && ComChoice === "paper" || UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "lizard" 
	  || UserChoice === "lizard" && ComChoice === "spock" || UserChoice === "spock" && ComChoice === "scissors"  || UserChoice === "scissors" && ComChoice === "lizard"
	  || UserChoice === "lizard" && ComChoice === "paper" || UserChoice === "spock" && ComChoice === "rock"|| UserChoice === "rock" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		i = Math.floor(Math.random() * 5);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1500);
}
function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = "Ви виграли!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1500);
}
function draw(bn){
	document.getElementById("who").innerHTML = "Нічія";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1500);
}
function lose(bn){
	ComPoints++;
	document.getElementById("who").innerHTML = "Ви програли";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1500);
}
