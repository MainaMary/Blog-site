import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    name: string | null,
    token: string | null

}
const initialState = {
    name: null,
    token: null

}
export const AuthSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
            setCredentials :(state:AuthState,action:PayloadAction<any>) =>{
                const {name, token} = action.payload
                state.name = name
                
    
            },
            logOut : (state, action) =>{
                state.name= null
            }
        }
    })