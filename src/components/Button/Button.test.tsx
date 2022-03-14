import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

const sampleProps = {
  onClick: jest.fn(),
  title: "click me",
};
describe("Button component", () => {
  it("should render the text passed in title prop", () => {
    render(<Button {...sampleProps} />);
    expect(screen.getByText(sampleProps.title).innerHTML).toBe(
      sampleProps.title
    );
  });
  it("should call the onClick function if provided in props on click", () => {
    render(<Button {...sampleProps} />);
    const button = screen.getByText(sampleProps.title);
    fireEvent.click(button);
    expect(sampleProps.onClick).toHaveBeenCalledTimes(1);
  });
  it("should not call the onClick function provided in props if the isDisabled prop is true", () => {
    render(<Button {...sampleProps} isDisabled />);
    const button = screen.getByText(sampleProps.title);
    fireEvent.click(button);
    expect(sampleProps.onClick).toHaveBeenCalledTimes(0);
  });
});
