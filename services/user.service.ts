import httpClient from "@/lib/axios";
import CreateUser from "@/types/user/user-create.type";

export const UserService = {
    GetAllUsers: async () => {
        const response = await httpClient.get("/users");

        return await response.data;
    },
    CreateUser: async (user: CreateUser) => {
        const response = await httpClient.post("/users", user);

        return await response.data;
    },
};
