import {React,useState,useEffect} from "react"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import IconButton from "@material-ui/core/IconButton";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {registerWithEmailAndPassword} from "../firebase"
export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setUsername] = useState("");


    const login ={
        marginTop:50
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
    <Grid className="login-cont">
       
        <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
            <img className="main-icon"src="/icon-dev.png"/>  
            <h2>Talk Python</h2>
       
        </Grid>
        <TextField label="Username" onChange={(e) => setUsername(e.target.value)} value={name} placeholder="Enter Username" fullWidth required/>
        <TextField label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" fullWidth required/>
        <TextField label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>

        <Button style={btnStyle}  onClick={() => registerWithEmailAndPassword(name,email, password)} type="sumbit" variant="contained" color="primary" fullWidth>Sign up</Button>
    
  


     
        <Typography style={login}> Have an account ?
            <Link to="/login">Log in</Link>
        </Typography>
        </Paper>
        
    </Grid>
    <Footer/>
</div>

)
}