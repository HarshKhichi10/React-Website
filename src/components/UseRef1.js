import React, { useRef , useEffect } from 'react'

function UseRef1() {
    
    const inputref = useRef(null)

   useEffect(()=>{
    inputref.current.focus()         

   },[]) 
    return (
        <div>

         <input type='text' ref={inputref}/>   

        </div>
    )
}

export default UseRef1
