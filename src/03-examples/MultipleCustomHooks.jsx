import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
  
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/1');
    
    const {name, id } = !!data && data;
    console.log({ data, isLoading, hasError })
    
    return (
    <>
        <h1>Mundo POKEMON!!</h1>
        <hr/>

        {
            isLoading
            ?(
                <div className="alert alert-info text-center">
                    Loading...
                </div>

            )
            :(
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{name}</p>
                    <footer className="blockquote-footer"> {id}  </footer> 
                </blockquote>

            )
        }

        <button className="btn btn-primary">Next Pokemon</button>
        

    </>

  )

}
