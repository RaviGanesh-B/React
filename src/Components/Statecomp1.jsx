import React from "react";
import { useState } from "react";

const StateComp1 = () => {
    console.log("working good");
    const[state,setstate] = useState("throw out the heaven and earth")

    return(
        <div style = {{
            width:"100%",
            height:"100vh",
            alignItems:"center",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap:"10px"
        }}>
            <p>{state}</p>
            <button onClick={()=>setstate("I alone am the honored one")} style={{width:"100px"}}>CLICK</button>
        </div>
    ) 
}

export default StateComp1;