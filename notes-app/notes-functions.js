// Read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem("notes")

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save Notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Remove a note from the list of notes
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDom = function(note) {
    const noteElement = document.createElement("div")
    const textElement = document.createElement("span")
    const button = document.createElement("button")

    // Setup the remove note button
    button.textContent = "X"
    noteElement.appendChild(button)
    button.addEventListener("click", function(e) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Set up the note title
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = "Unnamed Note"
    }
    noteElement.appendChild(textElement)
    

    return noteElement
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector("#notes-div").innerHTML = ""
    filteredNotes.forEach(function(note) {
        const noteElement = generateNoteDom(note)
        document.querySelector("#notes-div").appendChild(noteElement)
    })
}