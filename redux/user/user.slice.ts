import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { GetAllUsers } from "./user.action";

interface InitialState {
    users: User[];
}

const initialState: InitialState = {
    users: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (base) => {
        base.addCase(GetAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});
