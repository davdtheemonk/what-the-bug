import React from "react";
import "./styles.css"
import { Mail } from "@mui/icons-material";


export default function NewsLetter(){
    return(
        <div className="container-news" >
            <div className="container-box">
               <img className="mail-image" src="/iconmail.svg">

               </img>
                <h3>Follow my Developer Journey </h3>
              
                <button className="news-btn">Join NewsLetter</button>
             

</div>

            
        </div>
    )
}