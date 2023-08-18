import { render, screen } from "@testing-library/react";
import Status from "./Status";
import '@testing-library/jest-dom'

describe("Test for Status Component", () => {
    const statusProps = {
        label: "Active"
    };

    it("Renders without errors", () => {
        render(<Status {...statusProps} />);
    });

    test("Renders correct label and background color", () => {
        render(<Status {...statusProps} />);

        const statusComponent = screen.getByTestId("status-test");

        expect(statusComponent).toBeInTheDocument();
        expect(statusComponent).toHaveStyle({ backgroundColor: " #d3f4be" });
    });

    test("Renders different label and background color when inTable is false", () => {
        render(<Status label="Inactive" />);

        const statusComponent = screen.getByTestId("status-test");

        expect(statusComponent).toBeInTheDocument();
        expect(statusComponent).toHaveStyle({ backgroundColor: " #ffbfbf" });
    });
});