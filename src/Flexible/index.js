import React from "react"
import "./styles.css";
import {Link} from "react-router-dom"
export default function Flexible(){
    return(
        <div className="flexible__cont_over">
            <div className="flexible_cont">
                <div className="flexible_text">
                    <p className="flexible_textp1">FLEXIBLE TIMELINES</p>
                    <h3>Set Timelines On Courses</h3>
                    <p className="flexible_textp2">Instructors are able to register courses on the platform,
                        alocate the availability of the course .This 
                        allows the instructor to set maximum time for students to access course material and assessments.
                    </p>
                    <hr></hr>
                    <Link to="/portal">Try Now -></Link>
                </div>
            <img className="flexible_img" src ="time.svg"/>
            </div>

        </div>
    )
}