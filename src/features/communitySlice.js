import { createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name:"app",
    initialState:{
        communityId:null,
        communityName:null,
    },
    reducers:{
        setCommunityInfo:(state,action)=>{
            state.communityId = action.payload.communityId;
            state.communityName = action.payload.communityName;
        }
    },
});

export const {setCommunityInfo} = appSlice.actions;
export const selectCommunityId = (state)=>state.app.communityId;
export const selectCommunityName = (state)=> state.app.communityName;
export default appSlice.reducer;
