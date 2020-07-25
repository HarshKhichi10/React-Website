import React,{ useState , useEffect , useRef} from 'react'

function UseRef2() {
   const [timer , setTimer] =useState(0);
   const intervalRef  = useRef()

   useEffect(()=>{
      intervalRef.current  = setInterval(()=>{
          setTimer(prevTimer =>prevTimer +1)
      }, 1000) 
     return ()=>{
         clearInterval(intervalRef.current)
     };
     
   },[])
    return (
        <div>
            
 Hook Timer -{timer}
 <button onClick={()=>clearInterval(intervalRef.current)}> Hook Counter</button>
         </div>
    )
}

export default UseRef2
