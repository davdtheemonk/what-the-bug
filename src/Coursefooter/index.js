import React from "react"
import "./styles.css"
import {Link} from 'react-router-dom'

export default function Coursefooter(){
    return(<div className="course_footer_cont">
            
            <li className="footer">
              
            
            <ul><a href="" className="cours_footer_link">PRODUCTS</a>
            <div className="course_footer_contacts">
                <ul><a href="">Interactive Programming Courses</a></ul>
                <ul><a href="">Student Collab</a></ul>
                <ul><a href="">Live Coding Assessment</a></ul>
                </div></ul>
            <ul><Link to="/documentation" className="cours_footer_link">RESOURCES</Link>
            <div className="course_footer_contacts">
                <ul><a href="https://what-the-bug.tk">Blog</a></ul>
                <ul><a href="">Documenantion</a></ul>
                <ul><a href="https://what-the-bug.tk/community">Community</a></ul>
                </div></ul>
            <ul><a href="" className="cours_footer_link">ABOUT</a>
            <div className="course_footer_contacts">
                <ul><a href="">Pricing</a></ul>
                <ul><a href="">Terms of Use</a></ul>
                <ul><a href="">Help & FAQ</a></ul>


                </div></ul>
       
            <p className = "course_footer_copy">Copyright © 2022 </p>
            </li>
    </div>)
}