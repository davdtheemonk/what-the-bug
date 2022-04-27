import {React,useState} from "react"
import "./styles.css"
import {Avatar} from "@mui/material";
import {Paper} from "@material-ui/core"
import {SettingsOutlined} from "@mui/icons-material";
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
export default function Courseheader(){
    

   
    const user= useSelector(selectUser)

    /*className="sidaber_profileinfo"{user.displayName}</h3>
    <p>{user.uid.substring(0,5)}*/
    


    return(
        <div className="bar-header-course" >
            <h3></h3>
        <div className="course_header">
           
         
            <div className="course_headerright">
            <div className="course_header_profile">
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile Settings">
                    <Avatar />
</Tooltip>
</Box>
                    <div className="sidebar_profileicons">
                    
            <Tooltip title="Notifications">
                       <NotificationsNoneIcon className="course_dash_icon"/>
                      </Tooltip>
                     
          <Tooltip title="More">
                       <MoreVertIcon className="course_dash_icon"/>
                   
                    </Tooltip>
                    
            
                    </div>

                </div>

            </div>
           
            
        </div>
        <div className="course_header2">
           
         
           <div className="course_headerleft">
           <div className="course_header_icon">
           <li className="temp-list">
                <ul><img className="temp-icon"src="/icon-dev.png"/></ul> 
                 
                 
                   <ul><p className="temp-where">what the bug</p></ul>
                   </li>
           
                   </div>

               </div>

           </div>
          
           
       </div>
     
        
        
    )
}