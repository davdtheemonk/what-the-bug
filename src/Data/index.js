
async const getData =()=>{
    const getData = await fetch("localhost:8000")
    const finalData = getData.map(()=>{
        

    
    }
    )
    return finalData

}

async const getBlogPost = (id)={
    const getBlog =  await fetch('localhost:8000/'+{id})

}