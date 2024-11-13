window.onload = function() {
	setGame();
}

function setGame() {
	// Players X & O
	for (let i = 1; i <= 9; i++) {
		//<div id="1" class="number">1</div>
		let number = document.createElement("div");
		number.id = i;
		number.innerText = i;
		number.addEventListener("click", selectNumber);
		number.classList.add("number");
		document.getElementById("digits").appendChild(number);
	}
}