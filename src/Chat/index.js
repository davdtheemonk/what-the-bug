import React from 'react'
import "./styles.css"   
import { useSelector } from 'react-redux'
import {selectCommunityId,selectCommunityName} from '../features/communitySlice'
import Message from "../Message"
import { selectUser } from '../features/userSlice'
import { AddCircleOutlined, FileUploadOutlined } from '@mui/icons-material'
import {db} from '../firebase'
import Tooltip from '@mui/material/Tooltip';
import {getFirestore} from "firebase/firestore"//check this out later....
export default function Chat(){
    const user = useSelector(selectUser);
    const communityId = useSelector(selectCommunityId);
    const communityName = useSelector(selectCommunityName);
    const [input,setInput] = React.useState('')
    const [messages,setMessages] = React.useState([]) 
    React.useEffect(() => {
        if(communityId){
            db.collection("communities")
            .doc(communityId)
            .collection("messages")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data()))
            );
        }
    },[]);

    const sendMessage = (e)=>{
        e.preventDefault();
        db.collection('communities').doc(communityId).collection("messages")
        .add({
            timestamp: getFirestore.FieldValue.serverTimestamp(),
            message:input,
            user:user
        });
        setInput('')
    };
    return(
        <div className='chat'>
        <div className="chat__messages">
            {messages.map((message)=>{
            <Message 
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}/>})}
        </div>
        
        <div className="chat__input">
        <Tooltip title="Create community workspace">
            <AddCircleOutlined fontSize="large"></AddCircleOutlined>
            </Tooltip>
<form>
    <input value={input} onChange={(e)=> setInput(e.target.value)}placeholder={'Message ${communityName}'}/>
    <button className="chat__inputButton" onClick={sendMessage} type="submit" disabled={!communityId}>
        Send</button></form>
                    <div className="chat__inputIcon">
                    <Tooltip title="Upload Files">
                        <FileUploadOutlined fontSize="large"/>
                        </Tooltip>

                    </div>
        </div>
        </div>
    )

}
