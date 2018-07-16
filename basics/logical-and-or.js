let temp = 55

if (temp <= 90 && temp >= 60) {
    console.log("It's pretty nice out")
} else if (temp <= 0 || temp >= 120) {
    console.log("It's dangerous to go outside")
} else {
    console.log("eh, do what you want")
}


let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only serve Vegan dishes")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer some vegan options")
} else {
    console.log("Serve whatever")
}