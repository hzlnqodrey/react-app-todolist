import './Todo.css'
import TodoList from "../Todo-List/TodoList"
import TodoButton from '../todo-button/todoButton'
import { useState } from 'react'


const Todo = () => {

    // props
    const [getTodos, setTodos] = useState([
        {id: 1, title: 'Makan'},
        {id: 2, title: 'Tidur'},
        {id: 3, title: 'Ngoding'},
    ])

    const eventTodoButton = (newTodo) => {
        // menambahkan item baru secara real time dengan fungsi get and set
        setTodos(getTodos.concat(newTodo))

    }

    // struktur components
    return (
        <div>
            <h3>Todo List</h3>
            {/* todoButton */}
            <TodoButton onTodoButton={eventTodoButton} />

            {/* munculkan component TodoList dibawah ini */}
            {/* kirim props ke tag child */}
            <TodoList dataTodos={getTodos} />
        </div>
    );
}

export default Todo