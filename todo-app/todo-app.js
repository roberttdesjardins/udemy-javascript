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

// Print summary method: You have 2 todos left (p element)
// Add a p for each todo above (user text value)
const incompleteTodos = todo.filter(function(todo){
    return !todo.completed
})
const summary = document.createElement("h5")
summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
document.body.appendChild(summary)

todo.forEach(function(todo) {
    const p = document.createElement("p")
    p.textContent = todo.text
    document.body.appendChild(p)
})

