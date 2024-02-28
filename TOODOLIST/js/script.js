const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const todolist = document.getElementById("todoList");

addTodoButton.addEventListener("click", () => {
   
    const inputValue = todoInput.value;
    if (!inputValue) return;
    

    const todoItem = document.createElement("li");
    todoItem.innerText = inputValue;

    todolist.appendChild(todoItem);

    todoInput.value=" ";

});