import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Navbar from "./Navbar";

describe("Test for Nav Component", () => {
    it("Renders without errors", () => {
        render(<Navbar />);
    });

    it("Renders logo and label correctly", () => {
        render(<Navbar />);

        const logoElement = screen.getByAltText("logo");
        const labelElement = screen.getByText("Employee List");

        expect(logoElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
    });

    it("Renders employee icon correctly", () => {
        render(<Navbar />);

        const employeeIcon = screen.getByAltText("icon");

        expect(employeeIcon).toBeInTheDocument();
    });
});