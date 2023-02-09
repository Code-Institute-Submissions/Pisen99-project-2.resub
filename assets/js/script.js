// Created basic structure to the game with https://www.youtube.com/watch?v=1yS-JV4fWqY&t=27s so I could easier understand how to write my own code and how it works.
const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
    {
        name: "rock",
        image: "./assets/images/rock.png",
        beats: "scissor"
    },
    {
        name: "paper",
        image: "./assets/images/paper.png",
        beats: "rock"
    },
    {
        name: "scissor",
        image: "./assets/images/scissor.png",
        beats: "paper"
    }
];


// Finds the name of the game-icons selections & makes the selection on a click
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});

// Added score board functionality 1 or 0 points if you win or lose. Computers selections will randomize.
function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    // Created this score so it will increase if you win a round
    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

    // If either player wins 5 rounds, a pop-up window will show.
    if (computerScoreSpan.innerText == '5') {
        endGamePopup(); 
    }  else if (yourScoreSpan.innerText == '5') {
        endGamePopup();
    }

    // This whill increment the score in span (html)
    function incrementScore(scoreSpan) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    }
}


function addSelectionResult(selection, player) {
    /** Declaring variables to make the image icon show for each round
    * @param {img} - This is used to show image.
    * @param {div} - This is used to make images show inside the div (under "you" & "computer")
    */
    const imgId = selection.image;
    const img = document.createElement('img');
    img.src = imgId;
    const div = document.createElement('div');
    div.appendChild(img);
    div.classList.add('result-selection');
    div.classList.add(player);
    if (isWinner) div.classList.add('isWinner')
    finalColumn.after(div);
}


// Function checking that "beat" wins over "name"
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}


/** Creates a function that'll make computer to make random choices
* @param {randomIndex} - One of "rock", "paper" or "scissor"
*/
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}


// ------------------- Resets the game when user clicks on reset icon -------------------
function resetGame() {
    yourScoreSpan.innerText = 0;
    computerScoreSpan.innerText = 0;
    const clears = document.querySelectorAll('.result-selection');
    clears.forEach(clear => {
        clear.remove();
    });
}

// ------------------- Pop-up feature for Rules button -------------------
const rulesPopUp = document.getElementById("rules-container");


function popupContainer() {
    rulesPopUp.style.visibility = "visible";
}

// ------------------- closing for Rules button -------------------
function popupContainerClose() {
    rulesPopUp.style.visibility = "hidden";
}


// ------------------- Pop-up feature for when game is over -------------------
const endGame = document.getElementById('end-game');

function endGamePopup() {
    endGame.style.visibility = 'visible';
}

function endGameClose() {
    endGame.style.visibility = 'hidden';
}