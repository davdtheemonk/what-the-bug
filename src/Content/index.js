import React from "react"
import "./style.css"
import {db} from '../firebase'
import ContentHeader from "../ContentHeader"
import {useEffect} from "react"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ForumIcon from '@mui/icons-material/Forum';
import {AddCircleOutlined,AddCircleSharp , AddCircleRounded, GroupAddOutlined} from "@mui/icons-material"
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
import Chat from "../Chat"
import { TextField } from "@material-ui/core"
import { Alert } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import Message from "../Message"
import { useSelector } from 'react-redux'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {selectCommunityId,selectCommunityName} from '../features/communitySlice'
import { selectUser } from '../features/userSlice'
import Assessments from "../Assessments"
import Community from "../Community"
import Topics from "../Topics"
//import Playground from "../Playground"
import Notepad from "../Notepad"
import Newuser from "../Newuser"
import Sidebar from "../Sidebar"
export default function Content(props){
    const [value, setValue] = React.useState(0);
    const [communities,setCommunity] = React.useState([]);
    const user = useSelector(selectUser);
    const [input,setInput] = React.useState('')
    const [assessmentpage,setAssesmentPage] = React.useState(false)
    const [notepadpage,setNotepadPage] = React.useState(false)
    const [communitypage,setCommunityPage] = React.useState(false)
    const [topicspage,setTopicsPage] = React.useState(false)
    const [playgroundpage,setPlaygroundPage] = React.useState(false);
     const [newuser,setNewuserpage] = React.useState(true);
    

    

    const communityId = useSelector(selectCommunityId);
    const communityName = useSelector(selectCommunityName);
   
    
    const topics_selec = {
      display:"none",
    }

    useEffect(()=>{
      /* db.collection('communities').onSnapshot(snapshot=>{
           setCommunity(snapshot.doc.map(doc=>({
               id:doc.id,
               community: doc.data()
           })))
       })*/
   })
   const handleAssessmentPage=()=>{
     setAssesmentPage(true);
     

     if(playgroundpage){
setPlaygroundPage(false);
     }else if(notepadpage){
       setNotepadPage(false);

     }else if(communitypage){
       setCommunityPage(false)

     }
     else if(topicspage){
      setTopicsPage(false)
     }
     else if(newuser){
       setNewuserpage(false);

     }

   }
   const handleCommunityPage=()=>{
    setCommunityPage(true);
    setNewuserpage(false);
    if(playgroundpage){
setPlaygroundPage(false);
    }else if(notepadpage){
      setNotepadPage(false);

    }else if(assessmentpage){
      setAssesmentPage(false)

    }   else if(topicspage){
      setTopicsPage(false)
     }
          else if(newuser){
       setNewuserpage(false);

     }

   }
   const handlePlaygroundPage=()=>{
    setPlaygroundPage(true);
    if(communitypage){
setCommunityPage(false);
    }else if(notepadpage){
      setNotepadPage(false);

    }else if(communitypage){
      setCommunityPage(false)

    }   else if(topicspage){
      setTopicsPage(false)
     }
          else if(newuser){
       setNewuserpage(false);

     }

   }
   const handleNotepadPage =()=>{
    setNotepadPage(true);
    if(communitypage){
setCommunityPage(false);
    }else if(playgroundpage){
      setPlaygroundPage(false);

    }else if(communitypage){
      setCommunityPage(false)

    }   else if(topicspage){
      setTopicsPage(false)
     }

     else if(assessmentpage){
      setAssesmentPage(false)
     }
          else if(newuser){
       setNewuserpage(false);

     }
   }
   const handleTopicsPage=()=>{
    setTopicsPage(true);
    if(playgroundpage){
setPlaygroundPage(false);
    }else if(notepadpage){
      setNotepadPage(false);

    }else if(assessmentpage){
      setAssesmentPage(false)

    }   else if(communitypage){
      setCommunityPage(false)
     }
          else if(newuser){
       setNewuserpage(false);

     }

   }

   
 
    const handleAddCommunity = () =>{
      const communityName = prompt("Enter Community Name ")
      if (communityName){
        db.collection('communities').add({
          communityName:communityName,
        })
      }
     
    }
  
    //<Playground visible={playgroundpage}/>
    return(
        <div className="content">
             <ContentHeader />
             <Newuser workspaceurl={props.workspaceId}visible={newuser}/>

             <Assessments visible={assessmentpage}/>
             <Community visible={communitypage}/>
             <Notepad visible={notepadpage}/>
             <Topics visible={topicspage}/>

             
             
          
             
             <Box className="bottom-nav" >
            
      <BottomNavigation
         
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  className="bottom-nav-icon" sx={topics_selec}label="Topics" icon={<LocalLibraryIcon  />} />
       
        <BottomNavigationAction onClick={handleAssessmentPage}className="bottom-nav-icon" label="Assessments" icon={<PendingActionsIcon/>} />
       
        <BottomNavigationAction  onClick={handleNotepadPage} className="bottom-nav-icon" label="Notepad" icon={<NotesIcon/>} />
        <BottomNavigationAction  onClick={handleCommunityPage} className="bottom-nav-icon" label="Community" icon={<ForumIcon />} />
        <BottomNavigationAction  onClick={handlePlaygroundPage} className="bottom-nav-icon" label="Playground" icon={<TerminalIcon />} />
      </BottomNavigation>
      
    </Box>
            
           
        </div>
    )
}