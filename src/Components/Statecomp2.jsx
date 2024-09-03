import React from "react";
import { useState } from "react";

const Decrement = () => {

    const[powerlevel,setpowerlevel] = useState(100000);
    

    const handleDecrement = () => {
        
            setpowerlevel(prevpowerlevel => {
                return prevpowerlevel >= 100 ? prevpowerlevel -100 : 0;
            } );
    
    }


    return(
        <div style = {{
                width: "100%",
                height: "400px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                
        }}>
            <p>{powerlevel}</p>
            <button onClick={handleDecrement}>
                power down
            </button>
        </div>
    )
}

export default Decrement;