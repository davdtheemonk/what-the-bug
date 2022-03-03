import React from "react";
import GrainIcon from '@mui/icons-material/Grain';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
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
import { ConstructionOutlined, FacebookOutlined, GitHub, HeartBroken, LocationOn, MonitorHeart, ShareRounded, Twitter } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Footer from "../Footer"
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

export default function Template(){
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
            <p className="pub-date">Published on Feb 24,2022<b> <GrainIcon fontSize='small' ></GrainIcon>9 min read</b></p>
            
            <button className='start-btn-temp' onClick={handleClickOpen} >Get Started</button>
</div>
<div className="published">
<div className="published-text">
    <h1>How to develop a freelance career at Upwork 
    </h1>
    <div className="temp-share">

<LocationOn fontSize="small" ></LocationOn><p className="temp-loc">Nakuru,Kenya</p>
</div>

    <div className="published-story">
        <img src="./upwork.jpeg" className="published-pic"></img>
     <p className="pub-story">

I am pretty sure somewhere one of your child element is exceeding the width of its parent element. Check you code twice, if there any box-size of inner child elements is large because of one of the reasons like- when the box width including margin, padding, border go beyond the limit. And we possibly haven't added overflow: hidden; to its outer parent element. In this case they are considered reaching beyond their parent element and browsers show it with the scrollbar. So fix it via removing extra margins, paddings, borders or if you just don't want any headache, just try to add overflow:hidden; to the outer box.
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