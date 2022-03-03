import React from "react";
import "./styles.css"




export default function Latest(){
    return(
        
        <div>
                           <div className="featured1-header">
             <div className='featured1'>
            <h3 className='featured1-head'>Latest Stories</h3>
            <hr className='hr'></hr>
        </div>
        </div>

                    <div className="container-latest">
            
         
                <div className="latest-stories">
            <div className="latest-cont1">
                <img className="latest-pic" src="/pic5.webp">
                </img>
                <h3 className="latest-heading">What I'm working on</h3>
                <p className="descr">So I barely knew how to hold a mouse.Growing up we never had a computer till,I guess when I was 11.I wanted to become a hacker....</p>
                <div className="profile-desc">
                    <img className="profile-pic" src="/assets/avatar.jpg"></img>
                    <div className="profile-dets">
                    <h5 className="profile-name">David Mugalla</h5>
                    <h5 className="profile-date">Aug 13,2021</h5>
                    </div>

                </div>
            </div>
            </div>
            
            <div className="latest-stories">
            <div className="latest-cont1">
                <img className="latest-pic" src="/pic2.gif">
                </img>
                <h3 className="latest-heading">How to develop a better routine during Vacations and at home</h3>
                <p className="descr">So I barely knew how to hold a mouse.Growing up we never had a computer till,I guess when I was 11.I wanted to become a hacker....</p>
                <div className="profile-desc">
                    <img className="profile-pic" src="/assets/avatar.jpg"></img>
                    <div className="profile-dets">
                    <h5 className="profile-name">David Mugalla</h5>
                    <h5 className="profile-date">Aug 13,2021</h5>
                    </div>

                </div>
            </div>
                </div>
</div>



     
          
   </div>
   
        


        
        
    )
}