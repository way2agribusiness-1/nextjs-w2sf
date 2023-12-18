import {createSlice} from '@reduxjs/toolkit';
const Initialvalue="black"
const ThemeReducer=createSlice({
    name:'theme',
    initialState:{value:Initialvalue},
    reducers:{
        ChangeTheme:(state,action)=>{
state.value=action.payload
        }
    }
})
export const{ChangeTheme}=ThemeReducer.actions 
export default ThemeReducer.reducer;