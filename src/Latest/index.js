import React,{useState}from "react";
import "./styles.css"
import Cards from "../Cards"




export default function Latest(props){
    const [loading,setLoading] = useState(true)
    const displayBlogs=   props.posts.map(blog=>{
        return <Cards loading={loading} blog={blog} key={blog.pk}/>
    })
    return(
        
        <div>
                           <div className="featured1-header">
             <div className='featured1'>
            <h3 className='featured1-head'>Developer Series</h3>
            <hr className='hr'></hr>
        </div>
        </div>
   <div className="latest-stories">
        {displayBlogs}
        <div className="wait-cardss">
        <div className="featured-stories">
            <div className="story-cont1" >

                <img className="story-pc" src="/donut.svg">
                </img>
                <h3 className="story-heading">Posting more content soon</h3>
          
                </div>
 
            </div>
          
   
        </div>

        
    
     </div>
       

    
        </div>


     
          
  
   
        


        
        
    )
}