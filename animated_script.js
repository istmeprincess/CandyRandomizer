// Copyright: Princess, CandyRandomizer //
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var back = document.getElementById("secondBack");
var button = document.getElementById("randomize")

function firstDisplay() {
	body.style.background = 
	"linear-gradient(135deg," 
	+ color1.value 
	+ " 40%,"
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";"
}

firstDisplay();


function changeBackground() {
	body.style.background = 
	"linear-gradient(135deg," 
	+ color1.value 
	+ " 40%,"
	+ color2.value 
	+ ")";

	back.style.background = 
	"linear-gradient(135deg," 
	+ color2.value 
	+ " 40%,"
	+ color1.value 
	+ ")";

	h3.textContent = body.style.background + ";"
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);



// function randomSelector() {
// }

function randomColor() {

  	var letters = '0123456789ABCDEF';
  	var randomColor1 = '#';
  	for (var i = 0; i < 6; i++) {
    	randomColor1 += letters[Math.floor(Math.random() * 16)];
	}

	var randomColor2 = '#';
  	for (var i = 0; i < 6; i++) {
    	randomColor2 += letters[Math.floor(Math.random() * 16)];
	}

	color1.value = randomColor1;
	color2.value = randomColor2;

	body.style.background = 
	"linear-gradient(135deg," 
	+ color1.value 
	+ " 40%,"
	+ color2.value 
	+ ")";

	back.style.background = 
	"linear-gradient(135deg," 
	+ color2.value 
	+ " 40%,"
	+ color1.value 
	+ ")";

	h3.textContent = body.style.background + ";"
}

button.addEventListener("click",randomColor);
