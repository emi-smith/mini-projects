// CONTROL PANEL SECTION
// Game Points
let points = 0;
let pointsHomeEl = document.getElementById("home-points-el");
let pointsAwayEl = document.getElementById("away-points-el");

// Game Fouls
let fouls = 0;
let foulsHomeEl = document.getElementById("fouls-home-el");
let foulsAwayEl = document.getElementById("fouls-away-el");

// Game Period
let period = 0;
let periodEl = document.getElementById("period-el");

// Game Time
let hours = 0o0;
let minutes = 0o0;
let seconds = 0o0;
let tens = 0o0;
let appendHours = document.getElementById("hours");
let appendMinutes = document.getElementById("minutes");
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");

// Game Time Buttons
let timeStart = document.getElementById("start-time");
let timeStop = document.getElementById("stop-time");
let timeReset = document.getElementById("reset-time");
let interval; // To store timer values

// Entire Score Board Game Reset Button
let resetBoard = document.getElementById("reset-board");

// HOME CONTROLS
// Add points to home team
function pointsOneHome() {
	points += 1;
	pointsHomeEl.textContent = points;
}

function pointsTwoHome() {
	points += 2;
	pointsHomeEl.textContent = points;
}

function pointsThreeHome() {
	points += 3;
	pointsHomeEl.textContent = points;
}

// Add or subtract fouls to home team
function foulsPlusHome() {
	fouls += 1;
	foulsHomeEl.textContent = fouls;
}

function foulsMinusHome() {
	fouls -= 1;
	foulsHomeEl.textContent = fouls;
}

// Reset home team board
function resetPointsHome() {
	points = 0;
	pointsHomeEl.textContent = points;
}

function resetFoulsHome() {
	fouls = 0;
	foulsHomeEl.textContent = fouls;
}

// AWAY CONTROLS
// // Add points to away team
function pointsOneAway() {
	points += 1;
	pointsAwayEl.textContent = points;
}

function pointsTwoAway() {
	points += 2;
	pointsAwayEl.textContent = points;
}

function pointsThreeAway() {
	points += 3;
	pointsAwayEl.textContent = points;
}

// Add or subtract fouls to away team
function foulsPlusAway() {
	fouls += 1;
	foulsAwayEl.textContent = fouls;
}

function foulsMinusAway() {
	fouls -= 1;
	foulsAwayEl.textContent = fouls;
}

// Reset away team board
function resetPointsAway() {
	points = 0;
	pointsAwayEl.textContent = points;
}

function resetFoulsAway() {
	fouls = 0;
	foulsAwayEl.textContent = fouls;
}

// MAIN CONTROLS
// Game period controls
function addPeriod() {
	period += 1;
	periodEl.textContent = period;
}

function resetPeriod() {
	let periodReset = parseInt(periodEl.textContent);
	periodEl.textContent = period + periodReset;

	// Reset Values
	periodEl.textContent = " ";
	period = 0;
}

// Game times controls
function startTime() {
	tens++;
	if (tens <= 9) {
		appendTens.innerHTML = tens;
	}
	if (tens > 9) {
		appendTens.innerHTML = tens;
	}

	if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}

	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}

	if (seconds > 59) {
		minutes++;
		appendMinutes.innerHTML = "0" + minutes;
		seconds = 0;
		appendSeconds.innerHTML = "0" + 0;
	}

	if (minutes > 59) {
		hours++;
		appendHours.innerHTML = "0" + hours;
		minutes = 0;
		appendMinutes.innerHTML = "0" + 0;
	}
}

// Game Time Buttons
timeStart.onclick = function () {
	interval = setInterval(startTime);
};

timeStop.onclick = function () {
	clearInterval(interval);
};

timeReset.onclick = function () {
	clearInterval(interval);
	tens = "00";
	seconds = "00";
	minutes = "00";
	hours = "00";
	appendSeconds.innerHTML = seconds;
	appendTens.innerHTML = tens;
};

// RESET ENTIRE SCORE BOARD
resetBoard.onclick = function () {
	// Reset points
	points = 0;
	pointsHomeEl.textContent = points;
	pointsAwayEl.textContent = points;

	// Reset fouls
	fouls = 0;
	foulsHomeEl.textContent = fouls;
	foulsAwayEl.textContent = fouls;

	// Reset period
	periodEl.textContent = " ";
	period = 0;

	// Reset time
	clearInterval(interval);
	tens = "00";
	seconds = "00";
	minutes = "00";
	hours = "00";
	appendSeconds.innerHTML = seconds;
	appendTens.innerHTML = tens;
};
