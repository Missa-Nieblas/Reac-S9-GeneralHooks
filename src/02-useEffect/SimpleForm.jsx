import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'missa_nr@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
           ...formState,
           [ name ]: value 
        });

    }


    useEffect( ()=> {
        //console.log('useEffect called!');
    }, []);
    
    useEffect( ()=> {
        //console.log('FormState change!');
    }, [formState]);

    useEffect( ()=> {
        //console.log('email change!');
    }, [ email ]);

    


  return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="missa.nr@gmail.com"
            name="email"
            value={ email } 
            onChange={ onInputChange }
        />
        {
            (username === 'strider2' ) && <Message/>
        }
    </>
    
  )
}
