import { createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name:"app",
    initialState:{
        notepadId:null,
        notepadName:null,
    },
    reducers:{
        setNotepadInfo: (state,action)=>{
            state.notepadId = action.payload.notepadId;
            state.notepadName = action.payload.notepadName;

        },
        
    },
});

export const {setNotepadInfo} = appSlice.actions;
export const selectNotepadId = (state)=>state.app.notepadId;
export const selectNotepadName = (state)=> state.app.notepadName;
export default appSlice.reducer;
