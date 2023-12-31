"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface AppContainerProps {
    children: ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
    return <Provider store={store}>{children}</Provider>;
}
