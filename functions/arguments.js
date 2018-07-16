let add = function(num1, num2) {
    return num1 + num2
}

let result = add(3, 4)
console.log(result)



let getScoreText = function(name = "anon", score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText()

console.log(scoreText)

let getTip = function(total, tipPercent = 0.1) {
    let percentage = tipPercent * 100
    let tip = total * tipPercent
    return `A ${tipPercent}% tip on $${total} would be $${tip}`
}

console.log(getTip(60))

