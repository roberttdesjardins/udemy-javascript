// const myAge = 7
// let message = (myAge >= 18) ? "You can vote!" : "You can't vote EleGiggle"
// console.log(message)

const myAge = 23
const showPage = () => {
    return "Showing website page"
}

const showErrorPage = () => {
    return "Showing error page"
}

console.log((myAge >= 19) ? showPage() : showErrorPage())

const team = ["Robert", "Porter", "", ""]

console.log((team.length <= 4) ? `Team size: ${team.length}` : `Too many people on your team`)