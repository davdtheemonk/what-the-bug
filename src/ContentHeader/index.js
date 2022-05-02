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
export default function ContentHeader(){
    

   
    const user= useSelector(selectUser)

    /*className="sidaber_profileinfo"{user.displayName}</h3>
    <p>{user.uid.substring(0,5)}*/
    


    return(
        <div className="bar-header" >
        <div className="content_header">
           
            <div className ="content_headerleft">
                <h3>
                
                </h3>
            
            </div>
            <div className="content_headerright">
            <div className="sidebar_profile">
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile Settings">
                    <Avatar />
</Tooltip>
</Box>
                    <div className="sidebar_profileicons">
                    
            <Tooltip title="Notifications">
                       <NotificationsNoneIcon className="dash-icon"/>
                      </Tooltip>
                     
          <Tooltip title="More">
                       <MoreVertIcon className="dash-icon"/>
                   
                    </Tooltip>
                    
            
                    </div>

                </div>

            </div>
           
            
        </div>
        </div>
        
    )
}