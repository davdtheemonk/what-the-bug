import React from "react"
import {Link} from 'react-router-dom'
import "./styles.css"

export default function Banner(){
    return(
        <div className="banner-cont">

            <div className="banner-text">
      <h3 className="banner-mission">Join our mission to provide free programming literacy</h3>
             <a className="banner-donate" href="">Donate</a><p className="banner-or"> or </p>
              <Link to="/hire">Hire our platform</Link>
        </div>
        </div>
    )
}