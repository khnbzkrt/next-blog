import { MouseEventHandler } from "react";

interface PrimaryButtonProps {
    title: string;
    variant: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function PrimaryButton({ title, variant, onClick }: PrimaryButtonProps) {
    return (
        <button className="p-2 bg-purple-100 text-purple-800" onClick={onClick}>
            {title}
        </button>
    );
}
