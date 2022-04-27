import {React,useState,useEffect} from "react"
import "./styles.css"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import IconButton from "@material-ui/core/IconButton";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useSelector,useDispatch} from "react-redux"
import {selectUser,login,logout} from "../features/userSlice"
import Menuicon from "../Menuicon"
export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();

   

    const paperStyle = {
        padding:20,
        height:'70vh',
        width:350,
        margin:'left',
        marginTop:50
      
    }
    const ggStyle ={
        marginTop:17
        
    }
    const btnStyle = {
        marginTop:20,
        // marginBottom:20
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
      <span className="buttonText">Continue with Google</span>
    </div>
  
        <TextField style={ggStyle} label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" fullWidth required/>
        <TextField style={ggStyle} label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>

        <Button style={btnStyle}  onClick={() => logInWithEmailAndPassword(email, password)} type="sumbit" variant="contained" color="primary" fullWidth>Sign in</Button>
      



        <Typography >
            <Link to="">Forgot password ?</Link>

        </Typography>
        <Typography> Don't have an acount ?
            <Link to="/sign-up">Sign up</Link>
        </Typography>
      
        
    </Grid>
    <img alt="login-img" className="bg-image"src="/assets/rename.jpg" />
  
</div>
</div>

)
}