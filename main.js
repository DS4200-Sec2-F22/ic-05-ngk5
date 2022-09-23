// Karenna Ng
// ic-05 JavaScript


let numClicks = 0;

function addClick() {
	numClicks += 1;
	let newText = "Number of times button clicked: " + numClicks;
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText;
}