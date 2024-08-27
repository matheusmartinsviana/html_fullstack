import React from "react"
import "./todolist.css"

const TodoList: React.FC = () => (
    <div className="container">
        <h1>Lista de Tarefas</h1>
        <input type="text" id="todo-input" placeholder="Adicione uma nova tarefa" />
        <button id="add-button">Adicionar</button>
        <ul id="todo-list"></ul>
    </div>
)

export default TodoList