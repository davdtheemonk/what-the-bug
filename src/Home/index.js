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
import Socials from "../Socials"

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
                <ul><a href="">TALK PYTHON</a></ul>
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
    
    <Cards />
    <NewsLetter/>
    <Latest/>
    <Socials/>
   <Footer/>
       </div>
       

    )
}