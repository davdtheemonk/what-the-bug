import React from "react";
import "./styles.css"
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import { ComputerOutlined } from "@mui/icons-material";
import {db,auth} from "../firebase"
import {useEffect,useState} from "react"
import Tooltip from '@mui/material/Tooltip';

export default function Sidebar(){
    const [notepads,setNotepad] = useState([])
    useEffect(()=>{
       /* db.collection('notepads').onSnapshot(snapshot=>{
            setNotepad(snapshot.doc.map(doc=>({
                id:doc.id,
                notepad: doc.data()
            })))
        })*/
    })

    const handleAddNotepad=()=>{
        const notepadName=prompt("Enter a notepad name");
        if(notepadName){
            db.collection("notepads").add({
                notepadName:notepadName
            })
        }
    }
    
    return(
        <div className="sidebar">
            <div className="sidebar__top">
            
                <h3>Talk Python</h3>
                <ExpandMore/>
            </div>
            <div className="sidebar_content">
                <div className="sidebar_contentHeader">
                    <div className="sidebar_header">
                        <ExpandMore />
                        <h4>Intro to Python</h4>
                    </div>
                    <Tooltip title="Add Notepad">
                    <Add className="sidebar_add" onClick={handleAddNotepad}></Add>
                    </Tooltip>
                </div>
                <div className="sidebar_contentList">
                {notepads.map(({id,notepad})=>(
                     <SideBarContent key={id}id={id} notepadName={notepad.notepadName}/>

                ))}
               
               
            </div>
            </div>
            <div className="sidebar_info">
            <ComputerOutlined className="sidebar_infoicon"/>
                <div className="sidebar_contentinfo">
                    <p>python 3.10</p>
               
                </div>
                
                <div className="sidebar_infoicons">
                <Tooltip title="Info">
                    <InfoOutlined onClick={()=>{
                        auth.signOut()
                    }}/>
                    </Tooltip>
                     <Tooltip title="Provide FeedBack">
                    <MessageOutlined/>
                    </Tooltip>


                </div>
                


            </div>
        </div>
    )
}