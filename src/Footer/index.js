import "./styles.css"
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
import { ConstructionOutlined, GitHub, HeartBroken, MonitorHeart } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import {Link } from "react-router-dom"
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

export default function Footer(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
    <div className="container-footer">
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
              <div className="auth-name">
            David Mugalla
            </div>
          </Typography>
          <Typography gutterBottom>
          <Typography gutterBottom>

            <p className="auth-role">Software Engineer / Data Scientist / CS student</p>
            
          </Typography>
          <Typography gutterBottom>
              <div className="auth-tool">
                  <ConstructionOutlined></ConstructionOutlined>
           Made with React.Js
           </div>
           <div className="socials">

           <a href="https://www.linkedin.com/in/david-mugalla-198149215/" target="_blank"><LinkedIn></LinkedIn></a>
           </div>
          
          </Typography>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    
            <li className="footer">
              
            <p className="footer-qoute">"Before Developer am Human first"</p>
            <ul><a href="">About what-the-bug</a></ul>
            <ul><Link to="/documentation">API Docs</Link></ul>
            <ul><p className="footer-auth" onClick={handleClickOpen}>About Author</p></ul>
            <ul><a href="">Terms and Privacy</a></ul>
            
            </li>


    </div>
    )
    }
