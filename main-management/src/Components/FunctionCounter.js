import { useState  } from "react"


function FunctionCounterComponent(){
    const [counter, setCount] = useState(0);

    function NumberIncrementing(){
        setCount(counter + 1)
        console.log("number incremented")
    }

  return(
     <section>
         <h3>get number : {counter}</h3>
         <button onClick={NumberIncrementing}>Click here</button>
     </section>
  )
}

export default FunctionCounterComponent