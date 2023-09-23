let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let saveElTotal = document.getElementById("save-el-total");

function increment() {
	count += 1;
	countEl.textContent = count;
}

function decrement() {
	count -= 1;
	countEl.textContent = count;
}

function save() {
	let countStr = count + " + ";
	saveEl.textContent += countStr;
}

function saveTotal() {
	let convert = parseInt(saveElTotal.textContent);
	saveElTotal.textContent = count + convert;
	// Reset Values
	countEl.textContent = 0;
	count = 0;
}
