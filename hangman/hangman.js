class HangmanGame {
    constructor(word, numberOfGuesses, guessedLetters = []) {
        this.word = word.toLowerCase().split(""),
        this.numberOfGuesses = numberOfGuesses
        this.guessedLetters = guessedLetters
        this.status = "Playing"
    }
    get puzzle() {
        let returnString = ""
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                returnString += letter
            } else {
               returnString += "*"
            }
        })
        return returnString
    }
    makeGuess(guess) {
        if (this.status !== "Playing") {
            return
        }
    
        if (typeof guess !== "string" || guess.length !== 1) {
            throw Error("Guess must be a string of length 1")
        }
        guess = guess.toLocaleLowerCase()
    
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
            if (!this.word.includes(guess)) {
                this.numberOfGuesses--
            }
        } else {
            console.log("User already guessed that character")
        }
        this.calculateStatus()
    }
    calculateStatus() {
        let returnValue = true
        const completedGame = function(word, listOfGuesses) {
            word.forEach((letter) => {
                if (!listOfGuesses.includes(letter) && letter !== " ") {
                    returnValue = false
                }
            })
            return returnValue
        }
    
        if (this.numberOfGuesses <= 0){
            this.status = "Failed"
        } else if (completedGame(this.word, this.guessedLetters)) {
            this.status = "Finished"
        } else {
            this.status = "Playing"
        }
    }
    get statusMessage() {
        if (this.status === "Playing"){
            return `Guesses left: ${this.numberOfGuesses}`
        } else if (this.status === "Failed") {
            return `Nice Try EleGiggle. The word was "${this.word.join("")}"`
        } else {
            return "Great work! You guessed the word"
        }
    }
}