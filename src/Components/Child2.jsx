import React, { useEffect } from 'react'
export default function Child2({active ,onTasksCompleted}) {
   useEffect(() =>{
      let timer;
      if(active){
         timer = setInterval(() => {
            onTasksCompleted(2)
         }, 1000);
      }
      return () => clearInterval(timer);
   },[active,onTasksCompleted])
  return (
<div style={{color:active?"green":"red"}}>{active?"Child2 is Working":"Child2 is Stop"}</div>
  )
}
