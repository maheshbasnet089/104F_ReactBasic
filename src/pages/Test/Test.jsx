import { useState } from "react"


const Test = () => {
    const [count,setCount] = useState(10)
 
    function increaseCount(){
        setCount(count+1)
        console.log(count)
    }
    function decreaseCount(){
        setCount(count-1) 
        console.log(count)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCount} >+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Test