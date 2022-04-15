import React from "react";
import "./styles.css"
import { Mail } from "@mui/icons-material";


export default function NewsLetter(){
    const handleClick = () =>{
        
            const url = 'http://eepurl.com/hXc3dP';
            window.open(url, '_blank');
        
    }
    return(
        <div className="container-news" >
            <div className="container-box">
               <img className="mail-image" src="/iconmail.svg">

               </img>
                <h3>Follow my Developer Journey </h3>
              
                <button onClick={handleClick}className="news-btn">Join NewsLetter</button>
             

</div>

            
        </div>
    )
}