import React from "react";
import GrainIcon from '@mui/icons-material/Grain';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import "./styles.css"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons/faCircleDot';
import { ConstructionOutlined, FacebookOutlined, GitHub, HeartBroken, LocationOn, MonitorHeart, ShareRounded, Twitter } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Footer from "../Footer"
import DoneAllIcon from '@mui/icons-material/DoneAll';
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

export default function PythonMore(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(

    
        <div className="Template-container">

<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          About Author
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
              <div className="avatar-cont"> 
        <img className="img-avatar" src="/assets/avatar.jpg"></img>
        </div>
          </Typography>
          <Typography gutterBottom>
              <div className="auth-intro">
            Hello!! <b>Am David,am a Computer Science student</b>.I write about coding and everything tech.Check out the learning resources on <b>TALK PYTHON</b> on <b><i>introductory python</i></b> and <b><i>python for data science</i></b>
            </div>
          </Typography>
          <Typography gutterBottom>
              <div className="auth-intro2">
   
                  <a target="_blank" href="mugalladave@gmail.com">Drop me an Email<EmailSharpIcon></EmailSharpIcon></a>
         
         </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
            <div className="temp-nav">
                <li className="temp-list">
                <ul><img className="temp-icon"src="/icon-dev.png"/></ul> 
                 
                 
                   <ul><p className="temp-where">what the bug</p></ul>
                <ul className="search" ><input size="25" type="text" className="temp-search" placeholder="Search what-the-bug" ></input><button className="search-btn" type="sumbit"><SearchIcon></SearchIcon></button></ul>

                </li>
               
               
                

            </div>

            <div className="publisher-dets">
            <img className="profile-pic-pub" src="/assets/avatar.jpg"></img>
            <p className="pub-date">Published on Mar 12,2022<b> <GrainIcon fontSize='small' ></GrainIcon>6 min read</b></p>
            
            <button className='start-btn-temp' onClick={handleClickOpen} >Get Started</button>
</div>
<div className="published">
<div className="published-text">
    <h1>Learn python programming,data science and machine learning for free
    </h1>
    <div className="temp-share">

<LocationOn fontSize="small" ></LocationOn><p className="temp-loc">Nakuru,Kenya</p>
</div>

    <div className="published-story">
        <img src="/assets/group.jpg" className="published-pic"></img>
     <p className="pub-story">
         
         <i><b>What is talk python?</b></i><br></br>
<b>Talk Python</b> is a platform for learning <u>Python</u> language oriented modules.Its all about making the world programming literate.
The only requirements needed are a <u>computer</u> and <u>internet connectivity</u>. Each user learns at his/or her own pase.
There's no billing whatseover or training fees for any learner,the mission here is to make <u>programming education free</u>.
Here is a preview of what Talk python offers. 
Three modules 
<li>Introduction to python programming</li><li>Data Science fundamentals with Python</li><li>Machine Learning fundamentals with Python</li>
<br></br>
<i><b>Description</b></i>
<br></br>
<div className="box-features">
  <div className="box-text">
  <div className="box-basic">
  <h3>What you will learn</h3>
  </div>
  <div className="box-basics">
<p>Python Basics</p>
</div>
<div className="box-basics">
<p>Working with Data
</p></div>
<div className="box-basics">

<p>Working with Machine Learning models
</p>
</div>
<div className="box-basics"><p>Become an experienced Python Programmer
</p>
</div>

</div>
</div>
In an education approach each module has different features because each modules takes an independent approach in python.
In terms of student approach,there tonnes of <u>resources and materials</u> for research and learning in the resource page of each module.
A student is offfered a dashboard that looks similar to the one below

The dashboard contains the <u>topics page</u>, <u>resources page</u> and a <u>markdown notebook</u> to store your short notes
</p>

<div className="temp-share">
<p>Share..</p><Twitter></Twitter><FacebookOutlined></FacebookOutlined>
</div>
    </div>
    </div>
<div className="publisher-about">
<img className="profile-pic-pub-about" src="/assets/avatar.jpg"></img>

    <h3>David Mugalla</h3>
    <p className="publisher-role">Hello!!I am a developer and currently an undergrad taking Computer Science</p>
     <div className="temp-social">
      <EmailSharpIcon></EmailSharpIcon>
      <LinkedInIcon></LinkedInIcon>
      <GitHubIcon></GitHubIcon>
      
      </div>
      </div>
      
    </div>
 <Footer/>

</div>
        
    )
}