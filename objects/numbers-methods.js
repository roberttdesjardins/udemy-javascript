let num = 103.941

//console.log(num.toFixed(2))

//console.log(Math.round(num))
//console.log(Math.floor(num))
//console.log(Math.ceil(num))


let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)

// Guess a random number between 1 and 5
let guessingGame = function(userNumber) {
    return userNumber === Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

console.log(guessingGame(1))