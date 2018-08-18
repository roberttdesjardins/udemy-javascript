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

getPuzzle("2").then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
}) 

getCountry("US").then((country) => {
    console.log(`Country Name: ${country.name}`)
}).catch((error) => {
    console.log(error)
})

getLocation().then((data) => {
    console.log(`You are currently in ${data.city}, ${data.region} ${data.country}!`)
    return data.country
}).then((countryCode) => {
    return getCountry(countryCode)
}).then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})