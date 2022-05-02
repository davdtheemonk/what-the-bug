import React from "react";
import "./styles.css"
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ForumIcon from '@mui/icons-material/Forum';
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
import { ComputerOutlined } from "@mui/icons-material";
import {db,auth} from "../firebase"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import {useEffect,useState} from "react"
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import CloseIcon from '@mui/icons-material/Close';


export default function Sidebar(){
    const [value, setValue] = React.useState(0);
    //auth.signOut()
    const [notepads,setNotepad] = useState([])
    //const [courseinfopage,setCourseInfoPage] = useState(false)
    useEffect(()=>{
       /* db.collection('notepads').onSnapshot(snapshot=>{
            setNotepad(snapshot.doc.map(doc=>({
                id:doc.id,
                notepad: doc.data()
            })))
        })*/
    })
   /* {notepads.map(({id,notepad})=>(
        <SideBarContent key={id}id={id} notepadName={notepad.notepadName}/>

   ))}*/

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
            
                <h3></h3>
                
            </div>
            <div className="sidebar_content">
                <div className="sidebar_contentHeader">
                    <div className="sidebar_header">
                       
                        <h4></h4>
                    </div>
                
                </div>
                
                <div className="sidebar_contentList">
                        <div className="sidebarcontent">
         
            <Box className="side-nav" >
            
            <BottomNavigation
               
              showLabels
              sx={{display:"flex",backgroundColor:"black",flexDirection:"column",marginTop:4}}
              value={value}

              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
                <Tooltip title="Topics">
              <BottomNavigationAction sx={{color:"white",marginBottom:3}}className="bottom-nav-icon" icon={<LocalLibraryIcon  fontSize="medium"/>} />
              </Tooltip>
              <Tooltip title="Assessments">
              <BottomNavigationAction sx={{color:"white",marginBottom:3}}className="bottom-nav-icon"  icon={<PendingActionsIcon fontSize="medium"/>} />
              </Tooltip>
              <Tooltip title="Notepad">
              <BottomNavigationAction sx={{color:"white",marginBottom:3}}  className="bottom-nav-icon"  icon={<NotesIcon fontSize="medium"/>} />
              </Tooltip>
              <Tooltip title="Community">    
              <BottomNavigationAction  sx={{color:"white",marginBottom:3}} className="bottom-nav-icon" icon={<ForumIcon fontSize="medium" />} />
              </Tooltip>
              <Tooltip title="Playground">
              <BottomNavigationAction   sx={{color:"white",marginBottom:3}} className="bottom-nav-icon" icon={<TerminalIcon fontSize="medium"/>} />
          </Tooltip>
            </BottomNavigation>
            </Box>
            <h4><span className="sidebarcontent_hash"></span>
            
          

            </h4>
</div>
              
               
               
            </div>

            </div>
            <div className="sidebar_info">
                 <Tooltip title="Course Info">
                    <InfoOutlined className="sidebar_add" onClick={()=>{
                        //setCourseInfoPage(true)
                    }}/>
                    </Tooltip>
                    
                <div className="sidebar_contentinfo">
                 <p></p>
               
                </div>
                <Tooltip title="Provide FeedBack">
                    <MessageOutlined  className="sidebar_add"/>
                    </Tooltip>
                <div className="sidebar_contentinfo">
                 <p></p>
               
                </div>
                
               
                


            </div>
        </div>
    )
}