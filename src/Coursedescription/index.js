import React  from "react";
import Tooltip from '@mui/material/Tooltip';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


import { TimelapseOutlined,GroupAddOutlined } from "@mui/icons-material"

import "./styles.css"
import { Avatar } from "@material-ui/core";

export default function Othercourses(){
    return(
        <div className ="course_description_page">
        <div className='featured-header'>
        <div className='featured'>
            <h3 className='featured-head'>About this Course</h3>
            <hr className='hr'></hr>
        </div>
        </div>
        <div className='body'>
           
     
       </div>
       <div className="course_description_box_cont">
       <div className='course_description_box'>
          
           <p>If your a software developer who wants to build scalable AI-powered algorithms, you need to understand how to use the tools to build them.
               This course is part of the upcoming Machine Learning in Tensorflow.
           </p>
           <div className="course_instructor_cont">
           <Avatar/>
           <div className="course_instructor_info">
           <h4>Dr.John Doe</h4>
           <p>Instructor</p>
           </div>
           </div>
       </div>
       <div className='course_description_box2'>
           
       <div className="course_bar_info2">
                 <Tooltip title="Flexible timeline">
                    <TimelapseOutlined className="sidebar_add"/>
                    </Tooltip>
                <div className="sidebar_contentinfo">
                 <p>Flexible timeline</p>
               
                </div>
                </div>
                <div className="course_bar_info2">
                 <Tooltip title="Collaborative">
                    <GroupAddOutlined className="sidebar_add"/>
                    </Tooltip>
                <div className="sidebar_contentinfo">
                 <p>Collaborative</p>
               
                </div>
                </div>
                <div className="course_bar_info2">
                 <Tooltip title="Interactive">
                    < LocalLibraryIcon  className="sidebar_add"/>
                    </Tooltip>
                <div className="sidebar_contentinfo">
                 <p>Interactive</p>
               
                </div>
                </div>
           

       </div>
       </div>
 
        </div>
    )
}