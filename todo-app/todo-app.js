"use strict"
let todos = getSavedTodos()

const filters = {
    searchField: "",
    hideCompleted: false
}

renderTodos(todos, filters)

// Listen for filter TODOs text change
document.querySelector("#filter-input").addEventListener("input", (e) => {
    filters.searchField = e.target.value
    renderTodos(todos, filters)
})

// Listen for create TODO submission
document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoTitle.value,
        completed: false
    })
    e.target.elements.todoTitle.value = ""
    saveTodos(todos)
    renderTodos(todos, filters)
})

document.querySelector("#hide-completed-check").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})