let name = " Robert Desjardins  "

console.log(name.length)


// convert to uppercase

console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = "abc123Password098"

// includes
console.log(password.toLowerCase().includes("password"))

// Trim
console.log(name)
console.log(name.trim())

//isValidPassword
// longer than 8 characters and doesn't contain the word password

let isValidPassword = function(password) {
    return password.length > 8 && !password.toLowerCase().includes("password")
}
console.log(isValidPassword("abc123Password098"))
console.log(isValidPassword("1234"))
console.log(isValidPassword("thisisavalidpass"))