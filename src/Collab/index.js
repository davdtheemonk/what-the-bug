import React from "react"
import "./styles.css";
import {Link} from "react-router-dom"

export default function Collab(){
    return(
        <div className="collab__over_cont">
            <div className="collab_cont">
                <img className="collab_img" src="collab.svg"></img>
                <div className="collab_txt">
                <p className="collab_textp1">COLLABORATIONS</p>
                    <h3>Students Collaborate on Projects</h3>
                    <p className="collab_textp2">
                        Students can register and collaborate on school projects or coursework.The platform allows users to create
                        workspaces to work on collaborations.

                    </p>
                    <hr></hr>
                    <Link to="portal">Try Now -></Link>
                </div>
            </div>

        </div>
    )
}
