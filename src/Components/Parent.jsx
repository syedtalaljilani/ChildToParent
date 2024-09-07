import React, { useState } from 'react'
import Child2 from './Child2'
import Child1 from './Child1'
export default function Parent() {
    const [active, setActive] = useState(1)
     const handleTask = (id) =>{
        if(id === 1){
           setActive(2)
        }else if(id === 2){
           setActive(1)
        }
     }
  return (
    <div>
      <Child1 active={active===1} onTasksCompleted={handleTask}/>
      <Child2 active={active===2} onTasksCompleted={handleTask}/>
    </div>
    
  )
}
