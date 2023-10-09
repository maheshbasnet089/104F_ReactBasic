import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [decreaseCount,setDecreaseCount] = useState(0)
    // function to increase count value
    const increaseCount = ()=>{
        setCount(count + 1)
    }


    const handleDecrease = ()=>{
        setDecreaseCount(decreaseCount-1)
    }


    // kohi manxey first time site ma aauda or first time mount huda 
    // useEffect(()=>{
    //     // backend bata kehi lyauney pathauney modify garney code yesma halxum if first mount ma garney ho vaney
    //     console.log("Welcome to site")
    // },[]) 
 
    // useEffect(()=>{
    //    if(count !== 0 ){
    //     document.title = count
    //     console.log("Count value changed")
    //    }
    // },[count])
    useEffect(()=>{
        console.log("bye world")
    })
  return (
 <div>
       <div>{count}</div>
         <button onClick={increaseCount} >+</button>

       <div>{decreaseCount}</div>

         <button onClick={handleDecrease} >-</button>

 </div>
  )
}

export default UseEffect