# Picnic Matching Game

A simple memory matching game built with HTML, CSS and JavaScript. The game uses food emoji as card faces — flip two cards to find matching pairs.

## How to run

Recommended: use the Live Server (Go Live) extension in VS Code.

1. Open the `thoroughbred-article-page` workspace in VS Code (the workspace already includes the picnic project).
2. If you set the workspace Live Server root to the picnic folder, click **Go Live** and your browser will open `picnic-matching-game-copilot/index.html`.
	 - Alternatively, open `picnic-matching-game-copilot/index.html` in the editor and click **Go Live** to serve that folder.
3. Or open `picnic-matching-game-copilot/index.html` directly in any browser (no server required for this static page).

## Controls

- Click a card to flip it.
- Flip a second card to try to find a match.
- The game counts moves (each time two cards are revealed counts as one move).
- Click **Restart Game** to reshuffle and start over.
- When all pairs are matched, a message will show your move count.
- Each card is marked with a question mark symbol ?, when you find a match the question mark symbol will be reversed so you can keep track of the cards already matched.

## Files

- `index.html` — page structure and the `#game` container.
- `styles.css` — layout, grid and card flip styles (responsive).
- `script.js` — game logic (deck shuffle, flip, match checking, move counter).

## Customization

- Change the set of card faces: edit the `foods` array in `script.js`.
	- Currently uses: `🍎 🍌 🍇 🍓 🍍 🍑 🍒 🥝` (8 unique, doubled to 16 cards).
	- To use images instead of emoji, add an `images/` folder and update the card rendering in `script.js` to insert `<img>` tags.

- Adjust emoji size: edit the CSS variable or `.card .face { font-size: ... }` in `styles.css`.

## Accessibility & improvements (ideas)

- Add keyboard navigation (use Arrow keys + Enter/Space to flip).
- Replace alert with a styled modal on win.
- Persist best score/time using `localStorage`.
- Add sound effects for flips/matches.

## License

This project is provided as-is for learning and demo purposes. Feel free to reuse and modify.

---


# URL of working website

# Screenshot of game 

# Disclaimer: 
this game was made with the use of the Copilot feature available on VS Code.

