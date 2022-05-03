import React from "react"
import "./styles.css";

export default function Start(){
    return(
        <div className="start__cont_over">

            <div className="start_cont_btns">
                <button 
                onClick={()=>
                window.location="/portal"}
                className="start_cont_startbtn">Get Started</button>
            
                </div>

            </div>
        
    )



}