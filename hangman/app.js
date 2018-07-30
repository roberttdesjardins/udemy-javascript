const game1 = new HangmanGame("Cat", 2)
const puzzleEl = document.querySelector("#puzzle-display")
const guessesEl = document.querySelector("#guesses-left-display")


window.addEventListener("keypress", function (e) {
    const guess = String.fromCharCode(e.charCode)
    try {
        game1.makeGuess(guess)
        renderHangManGame()
    } catch (error) {
        console.log(error)
    }
})


const renderHangManGame = function () {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

}

renderHangManGame()