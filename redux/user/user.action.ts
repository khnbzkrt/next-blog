import { UserService } from "@/services/user.service";
import CreateUser from "@/types/user/user-create.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAllUsers = createAsyncThunk("GetAllUsers", async () => {
    return await UserService.GetAllUsers();
});

export const CreateUser = createAsyncThunk("CreateUser", async (user: CreateUser) => {
    return await UserService.CreateUser(user);
});
