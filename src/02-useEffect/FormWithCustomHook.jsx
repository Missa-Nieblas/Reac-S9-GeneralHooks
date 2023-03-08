import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
//import { Message } from "./Message";


export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password:''
    });
    //const { username, email, password } = formState;

    //const { username, email, password } = formState;

    //const onInputChange = ({target}) => {
        //const {name, value} = target;
        //setformState({
          // ...formState,
        //   [ name ]: value 
      //  });

    //}


    //useEffect( ()=> {
        //console.log('useEffect called!');
    //}, []);
    
    //useEffect( ()=> {
        //console.log('FormState change!');
    //}, [formState]);

    //useEffect( ()=> {
        //console.log('email change!');
    //}, [ email ]);
  return (
    <>
        <h1>Formulario con custom Hook </h1>

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
        <input
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password } 
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
    
  )
}
