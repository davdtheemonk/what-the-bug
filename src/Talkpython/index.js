import React from "react";
import "./styles.css"
import SearchIcon from '@mui/icons-material/Search'
import Footer from "../Footer"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Latest from "../Latest"
import Footertalk from "../Footertalk"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Socials from "../Socials"
import {Link} from "react-router-dom"
import Menuicon from "../Menuicon"
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import Steppy from "../Steppy";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Banner from "../Banner"

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



export default function Talkpython(){
  const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const linkStyle = {

  color: 'blue'
};

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

  
  const data = {
    title: "",
    rows: [
        {
            title: "What is Talk Python?",
            content: `Talk Python offers foundation concepts and research materials for python programming and Data Science`,
        },
        {
            title: "How much does Talk Python cost?",
            content:
                "Talk python is Free.We offer free resources and reference materials for the learner.",
        },
   
        {
            title: "How many modules are in this course?",
            content: 
            "There are three modules, Introduction to Python, Data Science fundamentals with Python and Machine Learning fundamentals with Python",
        },
    ],
};

const styles = {
    bgColor: '#212121',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '150px',
};
    return(
        <div>
        
            <div className="talk-nav">
                <li className="temp-list">
                <ul><img className="talk-icon"src="/icon-dev.png"/></ul> 
                 
                 
                   <div className="temp_ul">
                    <ul><Link to="/">Blog</Link></ul>
                    <ul><Link to="/sign-up">Sign up</Link></ul>
                    <ul><Link to="">FAQ</Link></ul>
                    </div>
                    <ul className="talk-menu"><Menuicon ></Menuicon></ul>
                    
                </li>
         </div>
         <div className="talk-module">
         <div className='home-info'>
             <p className="talk-info">High Quality Python Coding Modules!</p>
             <p className="talk-info1">Intro to Python | Data Science | Machine Learning</p> 
             <button className="talk-btn" onClick={handleClickOpen}>Get Access</button>

             </div>



         </div>
         <div className="talk-modules">
         <div className='featured-header'>
        <div className='featured'>
            <h3 className='featured-head'>Modules Available</h3>
            <hr className='hr'></hr>
         
        </div>
        </div>
        <div className="container-modules">
        <div className="latest-stories">
            <div className="latest-cont1">
        <Card sx={{ maxWidth: 345,height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/assets/py.png"
          alt="py logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Introduction to Python programming
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Build a strong foundation in python programming.Learn the set data types and algorithms.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link style={linkStyle} to="/python-info">
          Learn More
        </Link>
      </CardActions>
    </Card>
    </div>
    </div>
    <div className="latest-stories">
            <div className="latest-cont1">
    <Card sx={{ maxWidth:345 ,height:400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image="/assets/py3.png"
          alt="data science"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Data Science fundamentals with Python
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Learn data science and build a good foundation working with data.Get to understand the various python libraries for data science. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link style={linkStyle} to="/python-info">
          Learn More
        </Link>
      </CardActions>


    </Card>
    </div>
    </div>
    <div className="latest-stories">
            <div className="latest-cont1">
        <Card sx={{ maxWidth: 345 ,height:400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image="/assets/py3.jpg"
          alt="py logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Machine Learning fundamentals with Python          </Typography>
          <Typography variant="body2" color="text.secondary">
    This is a kickstart to anyone who wants to start a career in Machine Learning.Learn about Machine Learning and its applications.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link style={linkStyle} to="/python-info">
          Learn More
        </Link>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
      </div>
      <Banner/>
      <div className="latest-updates">
         <div className='featured-header'>
        <div className='featured'>
        <h3 color="white" className='featured-head'>Latest Topics</h3>
            <hr className='hr'></hr>
            
       
          
    
        </div>
        </div>
        
        <div className="cards-cont"> 
        <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
  
    </Box>
        </div>
        </div>
        
        <Socials></Socials>
        
        <div className="qa-cont">
 
         <div className='featured-header'>
        <div className='featured'>
            <h3 color="white" className='featured-head'>Frequently Asked Questions</h3>
            <hr className='hr'></hr>
          
    
        </div>
        </div>
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
           <Steppy/>
          </Typography>
           
        </DialogContent>
      </BootstrapDialog>
   
       
        <Faq
                data={data}
                styles={styles}
              
            />
        </div>
         
<Footertalk></Footertalk>

        </div>
    )
}