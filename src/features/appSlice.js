import { createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name:"app",
    initialState:{
        notepadId:null,
        channelName:null,
    },
    reducers:{
        setNotepadId: (state,action)=>{
            state.notepadId = action.payload.notepadId;
            state.channelName = action.payload.notepadName;

        },
    },
});

export const {setNotepadId} = appSlice.actions;
export const setNotepadId = (state)=>state.app.notepadId;
export const selectNotepadName = (state)=> state.app.notepadName;

export default appSlice.reducer;
