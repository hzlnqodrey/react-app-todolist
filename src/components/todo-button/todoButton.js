import './todoButton.css'
import { useState } from 'react'


const TodoButton = (props) => {

    const [getInputTodo, setInputTodo] = useState('')

    // event handler onSubmit
    const handleSubmit =  (event) => {
        // mengatasi refresh pada saat menekan tombol submit (default behavior html)
        event.preventDefault()

        // membuat object baru yang akan dimasukkan ke TodoList saat 
        // menekan tombol "Tambahkan Daftar Tugas"
        const TugasBaru = {
            // generate id acak
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        // wadah props yang akan dikirimkan ke parent component
        props.onTodoButton(TugasBaru)

        // untuk mengosongkan value input
        setInputTodo('')
    }

    // event handleInputTodo, digunakan ketika value text di input berubah/change
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit" >Tambahkan Daftar Tugas</button>
        </form>
    )
}

export default TodoButton