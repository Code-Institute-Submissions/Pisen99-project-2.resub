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

    // Created this so score will increase if you win a round
    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

    // This whill increment the score in span (html)
    function incrementScore(scoreSpan) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    }
}


function addSelectionResult(selection, player) {
    const previousResultDivs = document.querySelectorAll(
        `.result-selection.${player}`
    );
    
    for (d of previousResultDivs) {
        d.remove();
    }
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


// ------------------- Pop-up feature for Rules button -------------------
const rulesPopUp = document.getElementById("rules-container");


function popupContainer() {
    rulesPopUp.style.visibility = "visible";
}

// ------------------- closing for Rules button -------------------
function popupContainerClose() {
    rulesPopUp.style.visibility = "hidden";
}