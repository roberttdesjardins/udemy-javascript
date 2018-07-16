const todo = [{
    text: "Eat",
    completed: true
}, {
    text: "Drink",
    completed: false
}, {
    text: "Sleep",
    completed: false
}, {
    text: "Repeat",
    completed: true
}, {
    text: "Dunno",
    completed: false
}]


let deleteTodo = function(todo, text) {
    let index = todo.findIndex(function (object, index) {
        return object.text.toLowerCase() === text.toLowerCase()
    }) 
    if (index !== -1) {
        todo.splice(index, 1)
    }
    
}


// Only returns todos that are not completed
const getThingsToDo = function (array) {
    return array.filter(function (element) {
        return !element.completed
    })
}

const sortTodo = function (array) {
    array.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodo(todo)
console.log(todo)