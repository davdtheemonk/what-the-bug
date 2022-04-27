import React from "react"
import "./styles.css"
import {Avatar} from "@mui/material"

export default function Message({timestamp ,user,message}){
    return(
        <div className="message">
            <Avatar src={user.photo}/>
        <div className="message__info">
            <h3>
                User
            <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h3>
<p>{message}</p>
        </div>
        </div>
    )
}