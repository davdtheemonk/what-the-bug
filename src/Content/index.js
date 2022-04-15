import React from "react"
import "./style.css"
import ContentHeader from "../ContentHeader"

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ForumIcon from '@mui/icons-material/Forum';
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
export default function Content(){
    const [value, setValue] = React.useState(0);
    return(
        <div className="content">
             <ContentHeader/>
             <Box className="bottom-nav" sx={{ width: 'auto' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Topics" icon={<LocalLibraryIcon  />} />
       
        <BottomNavigationAction label="Pending Assignment" icon={<PendingActionsIcon/>} />
       
        <BottomNavigationAction label="Notepad" icon={<NotesIcon/>} />
        <BottomNavigationAction label="Community" icon={<ForumIcon />} />
        <BottomNavigationAction label="Playground" icon={<TerminalIcon />} />
      </BottomNavigation>
      
    </Box>
            
           
        </div>
    )
}