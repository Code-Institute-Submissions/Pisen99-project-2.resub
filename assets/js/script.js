// Created basic structure to the game with https://www.youtube.com/watch?v=1yS-JV4fWqY&t=27s so I could easier understand how to write my own code and how it works.
const selectionButtons = document.querySelectorAll("[data-selection]");
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


function makeSelection(selection) {
    console.log(selection);
}

// Pop-up feature for Rules button
const rulesPopUp = document.getElementById("rules-container");


function popupContainer() {
    rulesPopUp.style.visibility = "visible";
}

// closing for Rules button
function popupContainerClose() {
    rulesPopUp.style.visibility = "hidden";
}