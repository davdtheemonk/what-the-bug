import "./styles.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Cards from "../Cards"
import NewsLetter from "../NewsLetter"
import Latest from "../Latest"
import Footer from "../Footer";
import Alert from "react"
import {useState,useEffect} from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import axios from "axios";
import {Link} from "react-router-dom"
import {api} from "../unsplash"
import Socials from "../Socials"
import Data from "../Data"

const skele = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <div className="skeleton-cont">
     {(loading ? Array.from(new Array(3)) : skele).map((item, index) => (
        <Box key={index} sx={{ width: 290, marginRight: 15, my: 5 }}>
          {item ? (
            <img
              style={{ width: 290, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={290} height={158} />
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
      </div>
  
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};




export default function Home(){
  const [minimumTime, setMinimumTime] = useState(1500);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(true);
  const [loader, setLoader] = useState(false);
  const [data,setData] = useState([]);
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState("");
  const [posts,setPosts] = useState([]);
  //const [blog1,setBlog1] = useState([]);
  const [blog1,setBlog1] = useState([]);
  const [img, setPhotosResponse] = useState(null);
  
  const [blog3,setBlog3] = useState([]);
  const displayBlogs=   posts.map(blog=>{
    return <Cards  blog={blog} key={blog.pk}/>
})

  const handleClick = () =>{
        
    const url = `/blogs/${blog1.pk}`;
    window.location = url;
  

}

React.useEffect(()=>{
  async function getBlogs(){
  await axios.get(`https://wtb-v1.herokuapp.com/posts`)
    .then(res=>{
      //(res.data[-1])
      setPosts(res.data)
  





    }).catch(err=>{
      console.log(err)
    })
  }
    getBlogs();
 
  
  
  },[]);


  
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}


 



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <div >
          
              <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Get Started
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              <div className="avatar-cont"> 
        <img className="img-avatar" src="/assets/avatar.jpg"></img>
        </div>
          </Typography>
             <Typography gutterBottom>
              <div className="auth-intro">
            Hello!! <b>Am David,am a Computer Science student</b>.Check out the learning resources on <b>TALK PYTHON</b> on <b><i>introductory python</i></b> and <b><i>python for data science</i></b>
            </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
        <div className='nav'>
    
        
            <li className='list-zero'>
            <img className="main-icon"src="/icon-dev.png"/>        
           
            <ul><a href='https://www.linkedin.com/in/david-mugalla-198149215/' ><LinkedInIcon></LinkedInIcon></a></ul>
                <ul className='twitter'><TwitterIcon></TwitterIcon></ul>

               
                <button className='start-btn' onClick={handleClickOpen}>Get Started</button>
                
            </li>
            <div className='home-image'>
            <img className="home-img" src="/pic3.gif"></img>
            </div>
            <li className='list-one'>
                
                <ul><a href="https://github.com/davdtheemonk">PROJECTS</a></ul>
      
                <ul><a href="https://www.upwork.com/freelancers/~014e87618220a92fdb" target="_blank">FREELANCING</a></ul>
                <ul><Link
              className="navbar-item"
              to="/community">
              TALK PYTHON
            </Link></ul>
                <ul className='line'>|</ul>
                <ul className='career-data'>TECH BUGS YOU CAN'T CHEW </ul>
             
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
       <div className="cards-cont"> 

      { blog1==[] ?   <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
  
    </Box> : !minimumTimeElapsed || loader ? <Box sx={{ overflow: 'hidden' }}>
      <Media loading />   </Box>  : <>   
      {displayBlogs}    
       </>}
    </div>
   

    <NewsLetter/>
    <Latest posts={posts}/>
    <Socials/>
   <Footer/>
       </div>
       

    )
}