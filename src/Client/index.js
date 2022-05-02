import React from "react"
import "./styles.css"
import {Avatar} from "@mui/material"

export default function Client(props){
    //user.phot
    return(
        <div className="client">
            <Avatar />
            <span className="userName">{props.username}</span>

        </div>
    )

}