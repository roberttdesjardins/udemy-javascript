"use strict"

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem("todos")

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Filter though a list of Todo and only return those which fit the search
const filterTodos = (array, searchFilter) => {
    return array.filter((element) => {
        const searchTextMatch = element.text.toLowerCase().includes(searchFilter.searchField.toLowerCase())
        const hideCompletedMatch = !searchFilter.hideCompleted || !element.completed
        return searchTextMatch && hideCompletedMatch
    })
}

// Clear todo fields
const clearTodoFields = () => {
    document.querySelector("#todo-uncompleted-div").innerHTML = ""
    document.querySelector("#todo-div").innerHTML = ""
}

// Render application todos based on filters
const renderTodos = (array, filter) => {
    clearTodoFields()
    let filteredArray = filterTodos(array, filter)

    document.querySelector("#todo-uncompleted-div").appendChild(generateSummaryDom(filteredArray))

    filteredArray.forEach((element) => {
        document.querySelector("#todo-div").appendChild(generateTodoDom(element))
    })
}

// Uses a todo uuid to find the index in todos
const findTodoIndex = (id) => todos.findIndex((todo) => todo.id === id)

// Changes the completed property of a todo when its checkbox is changed
const toggleTodoCompleted = (id) => {
    const todoIndex = findTodoIndex(id)
    if (todoIndex > -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
}

// Removes a todo from todos by id
const removeTodo = (id) => {
    const todoIndex = findTodoIndex(id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for an individual todo
const generateTodoDom = (element) => {
    let todoElement = document.createElement("div")

    let todoCheck = document.createElement("input")
    todoCheck.setAttribute("type", "checkbox")
    todoCheck.checked = element.completed
    todoCheck.addEventListener("change", (e) => {
        toggleTodoCompleted(element.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    let todoText = document.createElement("span")
    todoText.textContent = element.text

    let removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.addEventListener("click", (e) => {
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
const generateSummaryDom = (array) => {
    const incompleteTodos = array.filter((todo) => !todo.completed)

    const summary = document.createElement("h5")
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    return summary
}