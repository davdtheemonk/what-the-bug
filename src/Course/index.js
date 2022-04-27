import React from "react"
import "./styles.css"
import Courseheader from '../Courseheader'
import Tooltip from '@mui/material/Tooltip';
import { TimelapseOutlined } from "@mui/icons-material"
import Latest from "../Latest"
import Coursedescription from "../Coursedescription"
import { getFormControlUnstyledUtilityClasses } from "@mui/base";
import Coursefooter from "../Coursefooter";


export default function Course(){
    return(
        <div>
            <Courseheader/>
            <div className="course-info-module">
         <div className='course-home-info'>
             <p className="course-name-info">Introduction to Python Programming</p>
             <p className="course-tutor-info">Dr.John Doe</p> 
             <div className="course-dash">

             </div>
             <div className="course-description">
              Focused on the ellaboration of python programing basics and fundamentals
             </div>
             <div className="course-more-info">
             <div className="course_bar_info">
                 <Tooltip title="Course Duration">
                    <TimelapseOutlined className="sidebar_add"/>
                    </Tooltip>
                <div className="sidebar_contentinfo">
                 <p>44 mins</p>
               
                </div>
               
                <Tooltip title="Course Published On">
                 <p className="course_date_published"> 3:45 11 Mar 2021 </p>
                 </Tooltip>
                 <Tooltip title="Course Availability">
                 <p className="course_available"> Available for 3hrs </p>
                 </Tooltip>
                 </div>

             </div>
          

             </div>
          
             </div>
    <Coursedescription/>         

   <Coursefooter/>

        </div>
    )
}