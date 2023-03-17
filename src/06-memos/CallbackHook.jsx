import { useCallback, useState } from "react"
import { Showincrement } from "./Showincrement";

export const CallbackHook = () => {
  
        const [counter, setCounter] = useState( 10 );

        const incrementFather = useCallback(
          (value) => {
            //console.log('setCounter(counter + 1);')
            setCounter( (c) => c + value );
          },
          [],
        )
        

        //const incrementFather = () => {
          //  setCounter(counter + 1 );
        //}

    return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr/>
        <Showincrement increment={ incrementFather } />


    </>
  )
}
