import React from "react";
import "./style.css"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ForumIcon from '@mui/icons-material/Forum';
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//build another sidebarcomponewt for the other data
export default function SideBarContent(){
    const [value, setValue] = React.useState(0);
    //{id,notepadName} props
    //  {notepadName} notepads
    return(
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
    )
}