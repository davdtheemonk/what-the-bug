import React from "react";
import "./styles.css"
import {Link} from "react-router-dom"

export default function Docs(){
    return(
        <div>
                 <div className="talk-nav">
                <li className="temp-list">
                <ul><img className="talk-icon"src="/icon-dev.png"/></ul> 
                 
                 
                   <div className="temp_ul">
                    <ul><Link to="/community">Modules</Link></ul>
                    <ul><Link to="/">Blog</Link></ul>
                    <ul><Link to="">Sign up</Link></ul>
                    </div>
                </li>
         </div>
         <div className="docs-menu">
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
             <a href="#intro">Introduction</a>
             <hr className="hr"></hr>
</div>

        </div>

    )
}