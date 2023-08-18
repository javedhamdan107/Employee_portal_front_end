
import { fireEvent, render, screen } from "@testing-library/react";
import Input, { InputPropTypes } from "./Input";
describe("If Button works properly", () => {
  test("If label rendered correctly", () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      label: "username",
      value: "",
      type: "text",
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId("label-test");

    expect(element.innerHTML).toBe("username");
  });

  test("If type text rendered correctly", () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      label: "username",
      value: "",
      type: "text",
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId("input-test");

    expect(element.getAttribute("type")).toBe("text");
  });

  test("If type password rendered correctly", () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      label: "username",
      value: "",
      type: "password",
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId("input-test");

    expect(element.getAttribute("type")).toBe("password");
  });
  test("If Snapshot exists correctly", () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      label: "username",
      value: "",
      type: "password",
      onChange
    };

    const { asFragment } = render(<Input {...InputProps} />);

    expect(asFragment).toMatchSnapshot();
  });
  test("If onChange is triggered", () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      label: "username",
      value: "",
      type: "password",
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId("input-test");

    fireEvent.change(element, { target: { value: "new_value" } });
    expect(onChange).toBeCalled();
  });
});
