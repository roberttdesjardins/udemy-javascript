let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log("Account is locked")
} else if (userRole === 'admin') {
    console.log("Hi Robert")
} else {
    console.log("Welcome user")
}

let temp = 45

if (temp <= 32) {
    console.log("It is freezing outside!")
} else if (temp >= 110) {
    console.log("it's too damn hot")
} else {
    console.log("eh, go for it")
}