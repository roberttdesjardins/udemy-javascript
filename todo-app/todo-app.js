const todo = [{
    text: "Order cat food",
    completed: false
}, {
    text: "Clean kitchen",
    completed: true
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
}]


const filteredTodo = {
    searchField: "",
    hideCompleted: false
}

const filterTodo = function(array, searchFilter) {
    return array.filter(function(element) {
        const searchTextMatch = element.text.toLowerCase().includes(searchFilter.searchField.toLowerCase())
        const hideCompletedMatch = !searchFilter.hideCompleted || !element.completed
        return searchTextMatch && hideCompletedMatch
    })
}

const renderTodos = function(array, filter) {
    let filteredArray = filterTodo(array, filter)


    document.querySelector("#todo-uncompleted-div").innerHTML = ""
    document.querySelector("#todo-div").innerHTML = ""

    const incompleteTodos = filteredArray.filter(function(todo){
        return !todo.completed
    })

    const summary = document.createElement("h5")
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    document.querySelector("#todo-uncompleted-div").appendChild(summary)


    filteredArray.forEach(function(element) {
        let todoParagraph = document.createElement("p")
        todoParagraph.textContent = element.text
        document.querySelector("#todo-div").appendChild(todoParagraph)
    })
}

renderTodos(todo, filteredTodo)

// Listen for filter TODOs text change
document.querySelector("#filter-input").addEventListener("input", function(e){
    filteredTodo.searchField = e.target.value
    renderTodos(todo, filteredTodo)
})

// Listen for create TODO submission
document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault()
    todo.push({
        text: e.target.elements.todoTitle.value,
        completed: false
    })
    e.target.elements.todoTitle.value = ""
    renderTodos(todo, filteredTodo)
})

document.querySelector("#hide-completed-check").addEventListener("change", function(e) {
    filteredTodo.hideCompleted = e.target.checked
    renderTodos(todo, filteredTodo)
})