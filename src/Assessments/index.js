import React from "react"

import "./styles.css"

export default function Assessments({visible}){
    return(     <>

        {visible==true?<div className="assesment__cont_over">
            <p>assessment</p>
        </div>:<div></div>}
        </>
        )}