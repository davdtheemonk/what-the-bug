import React, { useEffect } from "react"
import "./style.css"
import Sidebar from "../Sidebar"
import Content from "../Content"
import {auth} from "../firebase"
import Login from "../Login"
import {useAuthState} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom" 
import {useDispatch,useSelector} from "react-redux" 
import {selectUser,login,logout} from "../features/userSlice"

export default function Dashboard(){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
 

    useEffect(() => {
        auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch(login({
                    uid:authUser.uid,
                    photo:authUser.photoURL,
                    email:authUser.email,
                    displayName : authUser.displayName
                }))
            }
            else{
                dispatch(logout())
                
            }
        })
      }, [dispatch]);

    return(
        <>
   {user?<div className="dash_container">
        
        <Sidebar/>
        <Content/>
        



    </div>:<Login/>}
    </>

)
}