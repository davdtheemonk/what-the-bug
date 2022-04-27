import {React,useState,useEffect} from "react"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import IconButton from "@material-ui/core/IconButton";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {registerWithEmailAndPassword} from "../firebase"
import { CheckBoxOutlined } from "@mui/icons-material";
import Menuicon from "../Menuicon"
export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setUsername] = useState("");


    const login ={
        marginTop:20
    }
    const paperStyle = {
        padding:20,
        height:'70vh',
        width:350,
        margin:'auto',
        marginTop:50
      
    }
    const ggStyle ={
        marginBottom:20
        
    }
    const btnStyle = {
        marginTop:20
    }

return(
    <div>
                 <div className="talk-nav">
                <li className="temp-list">
                <ul><img className="talk-icon"src="/icon-dev.png"/></ul> 
                 
                 
                   <div className="temp_ul">
                    <ul><Link to="/">Blog</Link></ul>
                    <ul><Link to="">Sign up</Link></ul>
                    <ul><Link to="">FAQ</Link></ul>
                    </div>
                    <ul className="talk-menu"><Menuicon ></Menuicon></ul>
                    
                </li>
         </div>
         <div className="login-container">
    <Grid className="login-cont">
       
       
        <Grid className="main-icons" align="center">
            <img className="main-icon"src="/icon-dev.png"/>  
            <h2>Talk Python</h2>
       
        </Grid>
        <div className="customBtn" onClick={signInWithGoogle}>
      <span className="icon"></span>
      <span className="buttonText">Sign-up with Google</span>
    </div>

        <TextField label="Username" onChange={(e) => setUsername(e.target.value)} value={name} placeholder="Enter Username" fullWidth required/>
        <TextField label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" fullWidth required/>
        <TextField label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>

        <Button style={btnStyle}  onClick={() => registerWithEmailAndPassword(name,email, password)} type="sumbit" variant="contained" color="primary" fullWidth>Sign up</Button>
        <Typography style={login}> Have an account ?
            <Link to="/portal">Log in</Link>
        </Typography>
       
        
    </Grid>
    <img alt="login-img" className="bg-image"src="/assets/write.jpg" />
   
</div>
</div>

)
}