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

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(array, query) {
    return array.filter(function (element, index) {
        const isTitleMatch = element.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = element.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
    }) 
}


const sortNotes = function (array) {
    array.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)
