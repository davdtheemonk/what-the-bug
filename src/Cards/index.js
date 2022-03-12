import React from "react"

import "./styles.css"
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
export default function Cards(props){
    return(
        <div className="container-cards">
        <div className="featured-stories">
            <div className="story-cont1">
                <img className="story-pic" src={props.image}>
                </img>
                <h3 className="story-heading">{props.title}</h3>
                <p className="descr">{props.post}</p>
                <div className="profile-desc">
                    <img className="profile-pic" src="/assets/avatar.jpg"></img>
                    <div className="profile-dets">
                    <h5 className="profile-name">David Mugalla</h5>
                    <h5 className="profile-date">{props.date}</h5>
                    </div>

                </div>


            </div>
          
   
        </div>

        
    
     </div>
       

        


    )
}