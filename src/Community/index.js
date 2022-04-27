import React from "react";
import "./styles.css"
import {setCommunityInfo} from '../features/communitySlice'
import {useDispatch}  from "react-redux"
import Chat from "../Chat"
import { Avatar } from "@mui/material";
//build another sidebarcomponewt for the other data
export default function Community({id,communityName,visible}){
    const dispatch = useDispatch();
    /* {communities.length==0 ?
              <div className="community__desc_cont">
              <div className="community__nav">
        
                <div className="community__nav_top"> 
                
                      </div>
              </div>

              <div className="community_text">
              <p>
                Create a community and add members to collaborate.</p>
                </div>
                <div className="add__community__btn" onClick={handleAddCommunity}>
                <Tooltip title="start community">
                  <AddCircleOutlined sx={{marginTop:1.5}} />
                  </Tooltip>
                  </div>
                
             </div>
                 
               :communityId==null?
                <div className="community__desc_cont">
                  <div className="community__nav">
            
                    <div className="community__nav_top"> 
                    
                          </div>
                  </div>

                  {communities.map(({id,community})=>(

                  <Community key={id} id={id} communityName={community.communityName}/>))} 
                  <div className="add__community__btn" onClick={handleAddCommunity}>
                  <Tooltip title="start study community">
                    <LocalLibraryIcon sx={{marginTop:1.5}}/>
                    </Tooltip>
                    
                    </div>
                  </div>:<Chat/>}*/

    return(
        <>{ visible==true?
        <div className="community__names_cont" onClick={()=>{
            dispatch(setCommunityInfo({
                communityId:id, communityName:communityName
            }))
        }}>
             <div className="community__dets">
            <Avatar/>
            <div className="community__names">{communityName}</div>
           
           
            
            </div>

        </div>:<div></div>}
        </>
    )
}