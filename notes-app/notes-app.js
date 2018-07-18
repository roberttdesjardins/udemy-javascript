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

const filters = {
    searchText: ""
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector("#notes-div").innerHTML = ""
    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement("p")
        noteElement.textContent = note.title
        document.querySelector("#notes-div").appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function(e) {
    console.log("Click worked")
    e.target.textContent = "stop clicking me"
})


document.querySelector("#search-text").addEventListener("input", function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#for-fun-check").addEventListener("change", function(e) {
    console.log(e.target.checked)
})