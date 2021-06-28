import './TodoList.css';


const TodoList = (props) => {
    console.log(props.dataTodos);
    return (
        <ul>
            {
                props.dataTodos.map((Todos) => {
                    return <li key={Todos.id}>{Todos.title}</li>    
                })
            }
        </ul>
    );
}

export default TodoList;