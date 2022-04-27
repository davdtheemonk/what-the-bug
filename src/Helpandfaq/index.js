import React from "react"
import "./styles.css"
import {Link } from "react-router-dom"
export default function Helpandfaq(){
    return(
        <div className="help__cont">
            <div className="help_and_faq">
            <Link to="/documentation">Help and FAQ</Link>
            </div>

        </div>
    )
}