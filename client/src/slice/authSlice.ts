import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    name: string | null,
    token: string | null

}
const initialState = {
    name: null,
    toke: null

}
export const AuthSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {}
})
