import React from 'react'
import "./styles.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home(){
    return(
        <div >
        <div className='nav'>
    
        
            <li className='list-zero'>
            <img className="main-icon"src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/000000/external-software-developer-digital-asset-and-intangible-product-parzival-1997-flat-parzival-1997.png"/>        
           
            <ul><a href='https://www.linkedin.com/in/david-mugalla-198149215/' ><LinkedInIcon></LinkedInIcon></a></ul>
                <ul className='twitter'><TwitterIcon></TwitterIcon></ul>

               
                <button className='start-btn'>Get Started</button>
                
            </li>
            <li className='list-one'>
                <ul><a href="https://github.com/davdtheemonk">PROJECTS</a></ul>
                <ul></ul>
                <ul><a href="https://www.upwork.com/freelancers/~014e87618220a92fdb" target="_blank">FREELANCING</a></ul>
                <ul className='line'>|</ul>
                <ul className='career-data'>SOFTWARE ENGINEER / DATA SCIENTIST / CS Student</ul>
             
            </li>
         
        </div>
        <div className='featured-header'>
        <div className='featured'>
            <h3 className='featured-head'>Featured Stories</h3>
            <hr className='hr'></hr>
        </div>
        </div>
        <div className='body'>
     
       </div>
       </div>

    )
}