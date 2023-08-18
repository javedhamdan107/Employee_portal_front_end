import { render, screen, fireEvent } from "@testing-library/react";
import Popup from "./Popup";
import "@testing-library/jest-dom";

describe("Test for Popup Component", () => {
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();

  const popupProps = {
    onConfirmClickFunc: mockOnConfirm,
    onCancelClickFunc: mockOnCancel
  };

  test("Renders without errors when show is true", () => {
    render(<Popup {...popupProps} />);
  });

  test("Renders title, description, and buttons correctly", () => {
    render(<Popup {...popupProps} />);

    const descElement = screen.getByText("Are you sure?");
    const confirmButton = screen.getByText("confirm");
    const cancelButton = screen.getByText("cancel");

    expect(descElement).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("Triggers OnConfirm and OnCancel when buttons are clicked", () => {
    render(<Popup {...popupProps} />);

    const confirmButton = screen.getByText("confirm");
    const cancelButton = screen.getByText("cancel");

    fireEvent.click(confirmButton);
    fireEvent.click(cancelButton);

    expect(mockOnConfirm).toHaveBeenCalled();
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
