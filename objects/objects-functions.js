let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}


let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

console.log(otherBookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challenge
// Create function with takes fahrenheit, and returns an object with all 3 measurements

let getTemps = function(fahrenheit) {
    return {
        fahrenheitTemp: fahrenheit,
        celciusTemp: (fahrenheit - 32) * (5/9),
        kelvinTemp: (fahrenheit + 459.67) * (5/9)
    }
}

let temps = getTemps(72)

console.log(temps.fahrenheitTemp)
console.log(temps.celciusTemp)
console.log(temps.kelvinTemp)