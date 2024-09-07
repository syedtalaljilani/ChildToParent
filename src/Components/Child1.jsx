import React, { useEffect } from 'react'
export default function Child1({active ,onTasksCompleted}) {
   useEffect(() =>{
      let timer;
      if(active){
         timer = setInterval(() => {
            onTasksCompleted(1)
         }, 1000);
      }
      return () => clearInterval(timer);
   },[active,onTasksCompleted])
  return (
<div style={{color:active?"green":"red"}}>{active?"Child1 is Working":"Child1 is Stop"}</div>
  )
}
