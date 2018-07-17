/// DOM - Document Object Model

const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eat better"
}, {
    title: "Office modification",
    body: "Get a new seat"
}]


// Add a new element
const newParagraph = document.createElement("p")
newParagraph.textContent = "New Paragraph"
document.body.appendChild(newParagraph)