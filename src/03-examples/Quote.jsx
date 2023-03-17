import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({name, id}) => {

  const pRef = useRef();
  const [boxSize, setboxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} =  pRef.current.getBoundingClientRect();
    setboxSize({height, width });

  }, [name])

  return (
        <>
                <blockquote
                className="blockquote text-left"
                style={{ display: 'flex' }}
                >
                    <p ref={ pRef } className="mb-1">{name}</p>
                    <footer className="blockquote-footer"> {id}  </footer> 
                </blockquote>

                <code>{ JSON.stringify(boxSize) }</code>
        </>
  )
}
