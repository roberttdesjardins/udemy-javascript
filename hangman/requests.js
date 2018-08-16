const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject("An error has taken place")
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

// const getCountry = (countryCode, callback) => {
//     const requestCountries = new XMLHttpRequest()

//     requestCountries.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.response)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             callback(undefined, country.name)
//         } else if (e.target.readyState === 4) {
//             callback("An error has taken place for countries", undefined)
//         }
//     })

//     requestCountries.open("GET", "https://restcountries.eu/rest/v2/all")
//     requestCountries.send()
// }

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const requestCountries = new XMLHttpRequest()

    requestCountries.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject("An error has taken place for countries")
        }
    })

    requestCountries.open("GET", "https://restcountries.eu/rest/v2/all")
    requestCountries.send()
})