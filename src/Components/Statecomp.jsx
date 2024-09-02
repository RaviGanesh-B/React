import { useState } from "react";

const StateComp = () => {

    const [state,setstate] = useState("Hello");

  
    return(
        <div style = {
            {
                width: "100%",
                height: "100vh",
                alignItems:"center",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
            
                gap:"10px",


            }
        }>

   
        <p>{state}</p>

         <button onClick={() => setstate("I'm rg")} style={{width:"200px"}}>
            CLICK
         </button>
        </div>
    )
}

export default StateComp;