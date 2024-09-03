import { useState } from "react";

const Increment = () => {

    const handleIncerement = () => {
     if(count<10){
        setcount(count+1)
     }
    }

const [count,setcount] = useState(1)

    return(
        <div 
         style = {{
            width:"100%",
            height:"400px",
            alignItems:"center",
            justifyContent:"center",
            display:"flex",
            flexDirection:"column"
         }}>
        <p>{count}</p>
        <button onClick={handleIncerement}>
            Power up
        </button>
        </div>
    )
}



export default Increment;