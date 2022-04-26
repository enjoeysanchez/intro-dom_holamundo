// alert("Hola Mundo | Intro a DOM desde main.js")

// La const "todos" para que se vayan agregando items al array, y además le pasamos la instruccion de localStorage para que mantenga los datos que se agreguen
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Se crea la const render para ser llamada dentro de ella misma y luego mas adelante en el codigo
const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map(t => "<li>" + t + "</li>"); // Funcion de .map
    todoList.innerHTML = todosTemplate.join("");                // Funcion de .join   
             
    const elementos = document.querySelectorAll("#todo-list li")
    elementos.forEach((elemento, i) => {
        elemento.addEventListener("click", () => {
        elemento.parentNode.removeChild(elemento)
        todos.splice(i, 1)
        actualizarTodos(todos)
        render();
        })            
    })      
}

// MAIN INPUT | Cumple la funcion de poder agregar items a nuestra lista
window.onload = () => {
    render();
    const form = document.getElementById("todo-form")
    form.onsubmit = (clearField) => {
        clearField.preventDefault();  

        const todo = document.getElementById("todo");
        const todoText = todo.value;        
        todo.value = "";
        todos.push(todoText);    
        actualizarTodos(todos)
        render (); // Se llama a render
        
    }
}

const actualizarTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem("todos", todoStrings)
}



