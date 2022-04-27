import React from "react"
import "./styles.css";
import {Link} from "react-router-dom"

export default function Collab(){
    return(
        <div className="collab__over_cont">
            <div className="collab_cont">
                <img className="collab_img" src="analytics.svg"></img>
                <div className="collab_txt">
                <p className="collab_textp1">ANALYTICS</p>
                    <h3>Data Centric driven</h3>
                    <p className="collab_textp2">
                        The platfom offers the best tools to drive conclusions.We offer analytics to instructors who have registered courses.Students can also have timely reports on their contributions.
                    </p>
                    <hr></hr>
                    <Link to="portal">Try Now -></Link>
                </div>
            </div>

        </div>
    )
}
