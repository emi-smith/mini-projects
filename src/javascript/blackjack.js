let cards = [];
let sum = 0;
let hasBlackJack = false;

let player = {
	chips: 200,
};

let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// USER ELEMENT
let playerEl = document.getElementById("player-el");

// show sum container on gameStart()
function showSum() {
	document.getElementById("hidden-sum").style.display = "flex";
}

// Display number as a card
var deal = (cards) => {
	cardsEl.innerHTML = cards
		.map((item) => `<span class="${item}">${item}</span>`)
		.join("");
};

function requestUserInfo() {
	let condition = false;
	do {
		const userInput = prompt("Please enter name here to start game: ");
		if (userInput) {
			condition = false;
		} else {
			condition = true;
		}

		let playerNameEl = document.getElementById("player-name-el");
		playerNameEl.textContent = userInput;
	} while (condition);
}

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	// SETS/RESETS players.chips to $200
	player.chips = 200;
	playerEl.textContent = "'s Chips: $" + player.chips;
	renderGame();
	requestUserInfo();
	deal(cards);
	showSum();
}

// Renders the game
function renderGame() {
	cardsEl.textContent = " ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = " " + sum;
	// Does the player have blackjack or need a new card + update chip balance
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
		balance();
		console.log(sum);
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
		balance();
	} else {
		message = "You're out of the game!";
		isAlive = false;
		balance();
	}
	messageEl.textContent = message;
}

function balance() {
	// playerBalance = 200
	let playerBalance = player.chips;
	chips = 50;

	if (hasBlackJack) {
		// adds 50 chips to players balance
		newChips = playerBalance += chips;
		// resets player.chips to new chips total
		player.chips = newChips;
		// puts new chips total into playerEl
		playerEl.textContent = "'s Chips: $" + player.chips;
	} else if (!hasBlackJack && sum > 21) {
		// removes 50 chips to players balance
		newChips = playerBalance -= chips;
		// resets player.chips to new chips total
		player.chips = newChips;
		playerEl.textContent = "'s Chips: $" + player.chips;
	}
}

function KeepPlaying() {
	if (sum > 0) {
		// if plyer chips is > 0
		isAlive = true;
		hasBlackJack = false;
		let firstCard = getRandomCard();
		let secondCard = getRandomCard();
		cards = [firstCard, secondCard];
		sum = firstCard + secondCard;
		renderGame();
		balance();
	} else if (player.chips <= 0) {
		// if player chips is === 0
		message = "Sorry you're out of chips, please start a new game!";
		isAlive = false;
	} else if (isAlive === false && sum <= 0) {
		message = "Sorry you need to start the game first!";
	}
	messageEl.textContent = message;
	deal(cards);
}

function newCard() {
	if (hasBlackJack === false && sum <= 20 && isAlive === true) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	} else if (player.chips <= 0) {
		// if player chips is === 0
		message = "Sorry you're out of chips, please start a new game!";
		isAlive = false;
	} else if (isAlive === false && sum <= 0) {
		message = "Sorry you need to start the game first!";
	}
	messageEl.textContent = message;
	deal(cards);
}
