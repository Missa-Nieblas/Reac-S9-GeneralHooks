import { useForm } from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if ( description.lenght <= 1) return;
        
    const newTodo = {
        id: new Date().getTime(),
        description: description,
        done: false,
    }
    onNewTodo(newTodo);
    }

  return (
                 <form onSubmit={onFormSubmit}>
                    <input 
                        type="text"
                        placeholder="¿Que se Arma alv?"
                        className="form-control"
                        name="description"
                        value={description}
                        onChange={onInputChange} 
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar</button>
                </form>
  )
}

