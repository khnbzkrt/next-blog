import { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from ".";

const meta = {
    component: PrimaryButton,
    title: "Primary Button",
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
    args: {
        title: "Story Button",
        variant: "",
        onClick: () => alert("Is success!"),
    },
};
