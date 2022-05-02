import React from "react"
import "./styles.css"
import Interact from "../Interact";

import Tooltip from '@mui/material/Tooltip';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Collab from "../Collab";
import Start from "../Start";

import Analy from "../Analy"
import Flexible from "../Flexible"
import { TimelapseOutlined,GroupAddOutlined } from "@mui/icons-material"


export default function Hiremore(){
    return(<div className="hiremore_cont">
        <div className="hiremore_course_cont">
        <h4>Course Development</h4>
        <p className="hiremore_desc">Workspace</p>
        <p className="hiremore_desc_p1">The Eins Board is focused to provide an interactive and collaborative workspace for students.We do this by providing an interactive,end-to-end solution to manage a whole course study.</p>
    
          
<Flexible/>
<Collab/>
<Interact/>
<Analy/>
<Start/>

                </div>
       
    

    </div>)
}