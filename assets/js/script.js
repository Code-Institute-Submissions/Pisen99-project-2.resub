// Created basic structure to the game with https://www.youtube.com/watch?v=1yS-JV4fWqY&t=27s so I could easier understand how to write my own code and how it works.
const selectionButtons = document.querySelectorAll("[data-selection]");


// Finds the name of the game-icons selections & makes the selection on a click
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName);
    });
});


function makeSelection(selection) {
    console.log(selection)
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