let game
const puzzleEl = document.querySelector("#puzzle-display")
const guessesEl = document.querySelector("#guesses-left-display")


window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    try {
        game.makeGuess(guess)
        renderHangManGame()
    } catch (error) {
        console.log(error)
    }
})

const renderHangManGame = function () {
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
}


getPuzzle("3").then((puzzle)=> {
    console.log(puzzle)
}, (error) => {
    console.log(error)
})


getCountry("US").then((country) => {
    console.log(`Country Name: ${country.name}`)
}, (error) => {
    console.log(`Error: ${error}`)
})