import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
    isEdit: boolean
}
const initialState: Props = {
    isEdit: false
};

const EditSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        openEdit: (state: any, action: PayloadAction<boolean>) => {
            state.isEdit = action.payload

        },
        closeEdit: (state: any, action: PayloadAction<boolean>) => {
            state.isEdit = action.payload
        }
    },

});

export const {
    openEdit, closeEdit
} = EditSlice.actions;
const editReducer = EditSlice.reducer
export { editReducer }
