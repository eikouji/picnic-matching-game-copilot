// Picnic Matching Game - uses food emoji as card faces
const foods = [
	'🍎','🍌','🍇','🍓','🍍','🍑','🍒','🥝'
];

const game = document.getElementById('game');
const restartBtn = document.getElementById('restart');
const movesCount = document.getElementById('moves-count');

let deck = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

function init(){
	// build doubled, shuffled deck
	deck = shuffle([...foods, ...foods]);
	game.innerHTML = '';
	moves = 0;
	movesCount.textContent = moves;
	firstCard = null; secondCard = null; lockBoard = false;

	deck.forEach((emoji, idx) => {
		const card = document.createElement('button');
		card.className = 'card';
		card.setAttribute('data-food', emoji);
		card.setAttribute('aria-label', 'card');
		card.innerHTML = `
			<div class="face front"></div>
			<div class="face back">${emoji}</div>
		`;
		card.addEventListener('click', onCardClick);
		game.appendChild(card);
	});
}

function onCardClick(e){
	const clicked = e.currentTarget;
	if(lockBoard) return;
	if(clicked === firstCard) return; // clicking same card
	flipCard(clicked);

	if(!firstCard){
		firstCard = clicked;
		return;
	}

	secondCard = clicked;
	moves += 1;
	movesCount.textContent = moves;
	checkForMatch();
}

function flipCard(card){
	card.classList.add('flipped');
}

function unflipCards(){
	lockBoard = true;
	setTimeout(()=>{
		firstCard.classList.remove('flipped');
		secondCard.classList.remove('flipped');
		resetTurn();
	}, 700);
}

function checkForMatch(){
	const isMatch = firstCard.dataset.food === secondCard.dataset.food;
	if(isMatch){
		firstCard.classList.add('matched');
		secondCard.classList.add('matched');
		firstCard.removeEventListener('click', onCardClick);
		secondCard.removeEventListener('click', onCardClick);
		resetTurn();
		checkWin();
	} else {
		unflipCards();
	}
}

function resetTurn(){
	[firstCard, secondCard] = [null, null];
	lockBoard = false;
}

function shuffle(array){
	for(let i = array.length -1; i>0; i--){
		const j = Math.floor(Math.random()*(i+1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function checkWin(){
	const all = Array.from(document.querySelectorAll('.card'));
	const matched = all.filter(c => c.classList.contains('matched'));
	if(matched.length === all.length){
		setTimeout(()=>{
			alert(`You won in ${moves} moves!`);
		}, 300);
	}
}

restartBtn.addEventListener('click', ()=>{
	// simple restart: reshuffle
	init();
});

// init on load
init();
