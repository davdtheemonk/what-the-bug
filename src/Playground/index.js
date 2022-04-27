import Reatc from "react"
import "./styles.css"

export default function Playground({visible}){
    return(
        <>

    {visible==true?<div className="playground__cont_over">
        <p>playground</p>
    </div>:<div></div>}
    </>
    )
}