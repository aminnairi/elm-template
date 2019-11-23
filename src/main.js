"use strict"

// Main file for our Elm application
import Elm from "./Main.elm"

// Wait until the window has loaded
window.addEventListener("load", function() {
    // The HTML element where to put our Elm application's view
    const node = document.getElementById("elm")

    // If the div with id "elm" does not exist in the current DOM
    if (!node) {
        throw new ReferenceError("unable to find an element with an id of elm in the current DOM")
    }

    // Initialize our Elm application
    Elm.Main.init({ node })
})

