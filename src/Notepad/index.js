import Reatc from "react"
import "./styles.css"

export default function Notepad({visible}){
    return(
        
        <>

        {visible==true?<div className="notepad__cont_over">
            <p>notepad</p>
        </div>:<div></div>}
        </>
        
    )
}