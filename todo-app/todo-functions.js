// Fetch existing todos from localStorage
const getSavedTodos = function() {
    todoJSON = localStorage.getItem("todos")
    if (todoJSON !== null){
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Filter though a list of Todo and only return those which fit the search
const filterTodos = function(array, searchFilter) {
    return array.filter(function(element) {
        const searchTextMatch = element.text.toLowerCase().includes(searchFilter.searchField.toLowerCase())
        const hideCompletedMatch = !searchFilter.hideCompleted || !element.completed
        return searchTextMatch && hideCompletedMatch
    })
}

// Clear todo fields
const clearTodoFields = function() {
    document.querySelector("#todo-uncompleted-div").innerHTML = ""
    document.querySelector("#todo-div").innerHTML = ""
}

// Render application todos based on filters
const renderTodos = function(array, filter) {
    clearTodoFields()
    let filteredArray = filterTodos(array, filter)

    document.querySelector("#todo-uncompleted-div").appendChild(generateSummaryDom(filteredArray))

    filteredArray.forEach(function(element) {
        document.querySelector("#todo-div").appendChild(generateTodoDom(element))
    })
}

// Uses a todo uuid to find the index in todos
const findTodoIndex = function(id) {
    return todos.findIndex(function(todo) {
        return todo.id === id
    })
}

// Changes the completed property of a todo when its checkbox is changed
const toggleTodoCompleted = function(id) {
    const todoIndex = findTodoIndex(id)
    if (todoIndex > -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
}

// Removes a todo from todos by od
const removeTodo = function (id) {
    const todoIndex = findTodoIndex(id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for an individual todo
const generateTodoDom = function(element) {
    let todoElement = document.createElement("div")

    let todoCheck = document.createElement("input")
    todoCheck.setAttribute("type", "checkbox")
    todoCheck.checked = element.completed
    todoCheck.addEventListener("change", function(e){
        toggleTodoCompleted(element.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    let todoText = document.createElement("span")
    todoText.textContent = element.text

    let removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.addEventListener("click", function(e){
        removeTodo(element.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoElement.appendChild(todoCheck)
    todoElement.appendChild(todoText)
    todoElement.appendChild(removeButton)
    return todoElement
}

// get the DOM elements for list summary
const generateSummaryDom = function(array) {
    const incompleteTodos = array.filter(function(todo){
        return !todo.completed
    })

    const summary = document.createElement("h5")
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    return summary
}