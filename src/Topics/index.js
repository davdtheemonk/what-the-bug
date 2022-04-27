import React from "react";
import "./styles.css"

export default function Topics({visible}){
    return(
        <>
        {visible==true?

        <div className="topics__cont_over">
            <p>This is topics</p>
        </div>:<div></div>}
        </>
    )
}