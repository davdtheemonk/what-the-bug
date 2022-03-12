import {React,useState,useEffect} from "react"
import axios from "axios"
export default function Data(){
   /* const url = "http://127.0.0.1:8000/posts/"
    var blog =[];
    const getData = fetch(url).
    then(response=>response.json())
    .then(data=>{
      const blogsNo = data.length;
      
    for (var i=0;i<blogsNo;i++){
        blog.push(data[i]);
      }
      
      

    }).catch((e)=>
    console.log("an error occured",e))
    return blog;

  }
*/


  
}

   /*const getData= fetch("http://127.0.0.1:8000/posts/",{
    headers:{
        'Accept': 'application/json',
    }})
   .then(response=>response.json())
   .then(data=>{
    console.log(data)
   })
   .catch((e)=>
   console.log('an error occured',e))


  

console.log(getData)*/
/**async const getData =()=>{
    const get_Data = await fetch("localhost:8000/posts")
    .then(getData.map((item)=>{
        <Card key={item.id} item={item}/>
    }))
    .catch(
        Alert.alert('An error occured getting blog posts')
    )
    return get_Data;

}
//For getting each blog page
async const getBlogPost = (id)=>{
    
    const getBlog =  await fetch('localhost:8000/posts/search/'+{id})
    .then(getBlog.map((item)=>{
        <Template key={item.id} item={item}/>
    

    })).catch(
        Alert.alert("An error occured  getting blog post")
       
    )

    
    return getBlog;

}
export default getData;
export default getBlogPost;*/