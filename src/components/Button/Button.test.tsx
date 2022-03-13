import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
const btnFunction = jest.fn();
const btnText = "click me";
describe("Button component", () => {
  it("should render the text passed in title prop", () => {
    render(<Button title={btnText} />);
    expect(screen.getByText(btnText).innerHTML).toBe(btnText);
  });
  it("should call onClick function if provided in props", () => {
    render(<Button title={btnText} onClick={btnFunction} />);
    const button = screen.getByText(btnText);
    fireEvent.click(button);
    expect(btnFunction).toHaveBeenCalledTimes(1);
  });
});
