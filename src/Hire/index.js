import React from "react"
import "./styles.css"
import Particles from "react-tsparticles"
import Coursefooter from '../Coursefooter'
import Hiremore from "../Hiremore"

export default function Hire(){
    
        
    return(
        <div className="hire_over_cont">
       
        <div className="hire-cont">
                 <div className="hire-cont-nav">
            <div className="hire_header2">
           
         
           <div className="course_headerleft">
           <div className="course_header_icon">
           <li className="temp-list">
                <ul><img className="temp-icon2"src="/icon-dev.png"/></ul> 
                 
                 
                 
                   </li>
           
                   </div>

               </div>

           </div>
            </div>
            
            <div className="hire_home_cont">
              
                <h4 className="hire_home_intro">Better Study Tools</h4>
                
                <div className="hire_home_desc">
                <p>Better student-teacher tools for a programming curriculumn.Interactive tools for students
                    lead to better results.We deliver 100%  an eco-system to allow students to produce better investments on 
                    a collaborative and interactive environment.
                </p>
                </div>
                
                <div className="hire_home_btns">
                <button className="hire_home_startbtn" onClick={()=>{
                    window.location="/portal"
                }}>Get Started</button>
                <button className="hire_home_demobtn">Request Demo</button>
                </div>
         
                
            </div>
  
            </div>
    
            <Hiremore/>
            <Coursefooter/>
            
           
            </div>
     
    )
}