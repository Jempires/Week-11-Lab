let todoList = [
    {todo: 'clone repo for todo list', status:'complete'},
    {todo: 'create 4 objects for array', status:'complete'},
    {todo: 'create a for loop to go over todo', status:'started'},
    {todo: 'push code to my own github repo', status:'started'}
]

let completedTodos = []

var todoLength = todoList.length
var i = 0
for (todoList[i]; i < todoLength; i++) {
    if (todoList[i].status == 'complete') {
        completedTodos.push(todoList[i])
    }
}

var completedLength = completedTodos.length
var j = 0
for (completedTodos[j]; j < completedLength; j++) {
    console.log(completedTodos[j].status)
}
