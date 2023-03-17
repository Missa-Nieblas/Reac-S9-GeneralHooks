import React from "react";

export const Showincrement = React.memo(({ increment }) => {
  
    console.log('Me volvi a generar alv');
  
    return (
    <button className="btn btn-outline-danger" onClick={() =>{
        increment(5);
    }}>
        incrementar
    </button>
  )
})
