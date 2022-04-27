import React,{useState} from "react"
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./styles.css"
import {Link} from "react-router-dom"
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

import Skeleton from '@mui/material/Skeleton';
import {api} from "../unsplash"
const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396 k views',
      createdAt: 'a week ago',
    },
  ];
  
  function Media(props) {
    const { loading = false } = props;
  
    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
              <img
                style={{ width: 210, height: 118 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
  
            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  }
  
  Media.propTypes = {
    loading: PropTypes.bool,
  };
  

export default function Cards(props){
  const [img, setPhotosResponse] = useState(null);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(true);
  const [loader, setLoader] = useState(false);
  const url = `/blogs/${props.blog.pk}`;
  api.photos.get({photoId:`${props.blog.image.replaceAll('"', '')}`})
  .then(result => {
    setPhotosResponse(result.response.urls.raw);
  })
  .catch((err) => {
    console.log("something went wrong!");
  });


  const handleClick = () =>{
        
    const url = `/blogs/${props.blog.pk}`;
    window.location = url;
  

}

function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}
    return(
 
        <div className="container-cs">
        <div className="featured-stories">
            <div className="story-cont1" onClick={handleClick}>
                 { props.blog== null ?   <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
  
    </Box> :  !minimumTimeElapsed || loader ? <Box sx={{ overflow: 'hidden' }}>
      <Media loading />   </Box>  :
    <>
                <img className="story-pic" src={img}>
                </img>
                <h3 className="story-heading">{props.blog.title.replaceAll('"', '') }</h3>
                <p dangerouslySetInnerHTML={{__html:props.blog.post.substring(1,105).replace(/^"(.+(?="$))"$/, '$1')+"..." }}className="descr"></p>
                <div className="profile-desc">
                    <img className="profile-pic" src="/assets/avatar.jpg"></img>
                    <div className="profile-dets">
                    <h5 className="profile-name">David Mugalla</h5>
                    <h5 className="profile-date">{props.blog.date}</h5>
                    </div>

                </div>
                </>

    }
            </div>
          
   
        </div>

        
    
     </div>
       

        


    )
}