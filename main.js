// alert("Hola Mundo | Intro a DOM desde main.js")

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
        render();
        })            
    })      
}

// Una const en blanco para que se vayan agregando items al array
const todos = []

// MAIN INPUT | Cumple la funcion de poder agregar items a nuestra lista
window.onload = () => {
    const form = document.getElementById("todo-form")
    form.onsubmit = (clearField) => {
        clearField.preventDefault();  

        const todo = document.getElementById("todo");
        const todoText = todo.value;        
        todo.value = "";
        todos.push(todoText);     
        render (); // Se llama a render
        
    }
}




