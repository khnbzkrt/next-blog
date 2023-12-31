"use client";
import { PrimaryButton } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CreateUser, GetAllUsers } from "@/redux/user/user.action";
import { SelectAllUsers } from "@/redux/user/user.selector";
import { useEffect } from "react";

export default function Home() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(SelectAllUsers);
    useEffect(() => {
        dispatch(GetAllUsers());
    }, [dispatch]);

    console.log(users);

    return (
        <main>
            {users?.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
            <PrimaryButton
                title="Benim Butonum"
                onClick={async () =>
                    dispatch(
                        CreateUser({
                            name: "Hakan Angın",
                            email: "khan.bozkurt@gmail.net",
                        })
                    )
                }
                variant=""
            />
        </main>
    );
}
