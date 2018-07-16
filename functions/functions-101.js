let greetUser = function () {
    console.log("Welcome User!")
}

greetUser()


let square = function (num) {
    return num * num
}


console.log(square(3))

console.log(square(10))


let convertFahrenheitToCelsius = function (fahrenheitTemperature) {
    return (fahrenheitTemperature - 32) * (5/9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))
console.log(convertFahrenheitToCelsius(110))