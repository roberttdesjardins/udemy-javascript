"use strict"
// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

    
}

// Save Notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Remove a note from the list of notes
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
    const noteElement = document.createElement("div")
    const textElement = document.createElement("a")
    const button = document.createElement("button")

    // Setup the remove note button
    button.textContent = "X"
    noteElement.appendChild(button)
    button.addEventListener("click", (e) => {
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
    textElement.setAttribute("href", `\edit.html#${note.id}`)
    noteElement.appendChild(textElement)
    

    return noteElement
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === "byEdited") {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byCreated") {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byAlphabetical") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    document.querySelector("#notes-div").innerHTML = ""
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDom(note)
        document.querySelector("#notes-div").appendChild(noteElement)
    })
}