
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditDelete from "./EditDelete";

describe("Test for Edit Component", () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const editDeleteProps = {
    onDeleteclickfunc: mockOnDelete,
    onEditclickfunc: mockOnEdit
  };

  test("Renders without errors when show is true", () => {
    render(<EditDelete {...editDeleteProps} />);
  });

  test("Renders title, description, and buttons correctly", () => {
    render(<EditDelete {...editDeleteProps} />);

    const deleteElement = screen.getByTestId("delete-test");
    const editElement = screen.getByTestId("edit-test");

    expect(deleteElement).toBeInTheDocument();
    expect(editElement).toBeInTheDocument();
  });

  test("Triggers OnConfirm and OnCancel when buttons are clicked", () => {
    render(<EditDelete {...editDeleteProps} />);

    const deleteElement = screen.getByTestId("delete-test");
    const editElement = screen.getByTestId("edit-test");

    fireEvent.click(deleteElement);
    fireEvent.click(editElement);

    expect(mockOnDelete).toHaveBeenCalled();
    expect(mockOnEdit).toHaveBeenCalled();
  });
});
