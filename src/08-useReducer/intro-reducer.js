

//console.log('hola mundo alv');

const initialState = [{
    id: 1,
    todo: 'Recolectar la Piedra de sal',
    done: false,
}];

const todoReducer = ( state = initialState, action = {}) =>{

    if (action.type === '[TODO] add todo'){
        return [...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del alma',
    done: false
}
//todos.push({
 //   id: 2,
 //   todo: 'Recolectar la piedra del alma',
 //   done: false
//});
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );
console.log({state: todos});