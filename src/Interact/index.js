import React from "react"
import "./styles.css";
import {Link} from "react-router-dom"
export default function Interact(){
    return(
        <div className="interact__cont_over">
        <div className="interact_cont">
            <div className="interact_text">
                <p className="interact_textp1">INTERACTIVE</p>
                <h3>Interactive tools</h3>
                <p className="interact_textp2">
                    The platform is designed to offer various tools that foster interaction.Tool include video confrencing,student or users collaboration and live coding assesments and courses.
                </p>
                <hr></hr>
                <Link to="/portal">Try Now -></Link>
            </div>
        <img className="interact_img" src ="interact.svg"/>
        </div>

    </div>
    )
}