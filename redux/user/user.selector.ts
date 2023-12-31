import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const user = (state: RootState) => state.user;

export const SelectAllUsers = createSelector([user], (user) => user.users);
