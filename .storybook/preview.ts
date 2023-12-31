import type { Preview } from "@storybook/react";
import "../styles/globals.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        backgrounds: {
            default: "light",
            values: [
                {
                    name: "light",
                    value: "#FFFFFF",
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
