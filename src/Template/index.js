import React ,{useState} from "react";
import GrainIcon from '@mui/icons-material/Grain';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import Typography from '@mui/material/Typography';
import { ConstructionOutlined, FacebookOutlined, GitHub, HeartBroken, LocationOn, MonitorHeart, ShareRounded, Twitter } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Footer from "../Footer"
import {api} from "../unsplash"
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
    const [title,setTitle] = useState("")
    const [post,setPost] = useState("");
    const [timetoread,setTimeToRead]=useState('');
    const [date,setDate]=useState("");
    const [location,setLocation]=useState("");
    const [image,setImage]=useState("");
    const [] = useState("")
    const [img, setPhotosResponse] = useState(null);
    const { id } = useParams();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


      axios.get(`https://wtb-v1.herokuapp.com/posts/${id}`)
      .then(res=>{
        setDate(res.data.date);
        setTitle(res.data.title);
        setTimeToRead(res.data.timetoread);
        setPost(res.data.post);
        setLocation(res.data.location);
        setImage(res.data.image);
        console.log(post)




      }).catch(err=>{
        console.log(err)
      })

      api.photos.get({photoId:`${image.replaceAll('"', '')}`})
      .then(result => {
        setPhotosResponse(result.response.urls.raw);
      })
      .catch((err) => {
        console.log("something went wrong!");
      });

    
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
            <p className="pub-date">{date.replaceAll('"', '') }<b> <GrainIcon fontSize='small' ></GrainIcon>{timetoread.replaceAll('"', '')}</b></p>
            
            <button className='start-btn-temp' onClick={handleClickOpen} >Get Started</button>
</div>
<div className="published">
<div className="published-text">
    <h1 >{title.replaceAll('"', '') }
    </h1>
    <div className="temp-share">

<LocationOn fontSize="small" ></LocationOn><p className="temp-loc">{location.replaceAll('"', '')}</p>
</div>

    <div className="published-story">
        <img src={img} className="published-pic"></img>
     <p  className="pub-story" dangerouslySetInnerHTML={{__html:post.replace(/^"(.+(?="$))"$/, '$1') }}>
     

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
      <LinkedInIcon onClick={() =>{
        
        const url = 'https://www.linkedin.com/in/david-mugalla-198149215/';
        window.open(url, '_blank');
    
}}></LinkedInIcon>
      <GitHubIcon onClick={() =>{
        
        const url = 'https://www.github.com/davdtheemonk/';
        window.open(url, '_blank');
    
}}></GitHubIcon>
      
      </div>
      </div>
      
    </div>
 <Footer/>

</div>
        
    )
}