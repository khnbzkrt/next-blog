import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
    it("renders a primary button", () => {
        render(<Page />);
        const primaryButton = screen.getByText("Benim Butonum");
        expect(primaryButton).toBeInTheDocument();
    });

    it("name variable should be empty", () => {
        render(<Page />);
        const emptyNameValue = screen.getByText(/Name :/);
        expect(emptyNameValue).toBeInTheDocument();
    });

    it("name variable should be 'Hakan' after primary button click", () => {
        render(<Page />);
        const primaryButton = screen.getByText("Benim Butonum");
        expect(primaryButton).toBeInTheDocument();

        fireEvent.click(primaryButton);

        const filledNameValue = screen.getByText(/Name : Hakan/);
        expect(filledNameValue).toBeInTheDocument();
    });
});
