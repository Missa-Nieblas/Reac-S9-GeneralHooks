import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del sal',
        done: false,
    },
    
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer ,initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
        //console.log({todo});

    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
  return (
    <>
        <h1>TodoApp 10 <small>pendientes 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    />
                 {/* TodoList */}
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd */}
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/* TodoAdd */}
            </div>
        </div> 
    </>
  )
}