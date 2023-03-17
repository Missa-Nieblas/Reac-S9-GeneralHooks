import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";




export const Layout= () => {
  
    const {counter, increment, decrement} = useCounter();
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/' + counter );
    

    const drivernext = () => {
        increment();
        console.log(counter);
    }
    const driverback = () => {
        decrement();
        console.log(counter);
    }
    
    const {name, id, sprites} = data;
    console.log({ data, isLoading, hasError })
    
    return (
    <>
        <h1>Mundo POKEMON!!</h1>
        <hr/>
        {/* <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ id }
            onChange={ }
        />
        <hr/> */}

        {
            sprites
            ?(
                <img src={sprites.front_default} />
            )
            :(
                <img src='sprites' />
            )
                
        } 
        {
            isLoading
            ?
                <LoadingQuote/>
            :
                <Quote name={name} id={id}/>
        }
              
        
        <button className="btn btn-primary"
        onClick={drivernext}>
            Next</button>
        
        <button className="btn btn-primary"
        disabled={  isLoading }
        onClick={driverback}>
            Back</button>
        

    </>

  )

}

