import React,{useRef}from "react"
import "./styles.css"
import Codemirror from "codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/material-ocean.css"
import "codemirror/addon/edit/closetag"
import "codemirror/addon/edit/closebrackets"
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"
import {initSocket} from "../socket"
import ACTIONS from "../Actions.js"
import Client from "../Client"
import { useEffect } from "react"
import toast from "react-hot-toast"
import {useLocation} from "react-router-dom"
export default function Playground(props){
    const user= useSelector(selectUser)
        const [clients, setClients] = React.useState([])
   // photo ={client.username} 
    const workspaceId=222;
    const socketRef = useRef(null)
    useEffect(()=>{
        const init = async()=>{
            socketRef.current= await initSocket();
            socketRef.current.on('connect_error',(err)=>handleErrors(err));
            socketRef.current.on('connect _failed',(err)=>handleErrors(err));
            function handleErrors(e){
                toast.error("Connection failed try again later")
                
            }
            socketRef.current.emit(ACTIONS.JOIN,{
                workspaceId,
                username:user.name
                

            });
            socketRef.current.on(ACTIONS.JOINED,({clients,username,socketId})=>{
                if(username !== user.name){
                    toast.success(`${username} joined workspace playground`);

                }
                setClients(clients)

            });
            socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
                toast.success(`${username} left the workspace playground`)
                setClients((prev)=>{
                  return prev.filter(
                      (client)=>client.socketId!==socketId
                  )
                })
            })
        };
        init()
        return ()=>{
            socketRef.current.disconnect();
            socketRef.current.off()
        }

    },[])

 

    const showusers = clients.map((client)=>(
<Client key={client.socketId} username={client.username}/>))
    React.useEffect(() => {
        async function init(){
            Codemirror.fromTextArea(document.getElementById("realtimeEditor"),{
                mode:{name:'javascript',json:true},
                theme:'material-ocean',
                autoCloseTags:true,
                autoCloseBrackets:true,
                lineNumbers:true,

            });


        }
        init();
        
        },[])
  
    return(
        <>

    {props.visible==true?
    <div className="playground__cont_over">
        <div className="aside">
            <div className="asideInner">
            <div className="clientList">
            <h3>Workspace Users</h3>
                {showusers}
               
                
               </div>
             
            </div>
        
        </div>
        <div className="editorwrap">

  
        <textarea id="realtimeEditor">

        </textarea>
        </div>
        <div className="output-editor">
        
        </div>
    </div>:<div></div>}

    </>
    )
}