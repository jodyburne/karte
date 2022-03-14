import AddressInput from "./AddressInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconType } from "../Icon";

const sampleProps = {
  validatePickUp: jest.fn(),
  validateDropOff: jest.fn(),
  onClick: jest.fn(),
  pickUpIcon: IconType.PickUpNeutral,
  dropOffIcon: IconType.DropOffNeutral,
  loading: false,
};
const buttonText = "Create job";
const loadingText = "Creating...";
const placeholder = {
  pickUp: "Pick up address",
  dropOff: "Drop off address",
};

describe("AddressInput component", () => {
  it("should call the validatePickUp function given in props on pick up input blur", () => {
    render(<AddressInput {...sampleProps} />);
    const input = screen.getByPlaceholderText(placeholder.pickUp);
    fireEvent.change(input, { target: { value: "lalala" } });
    fireEvent.blur(input);
    expect(sampleProps.validatePickUp).toHaveBeenCalledTimes(1);
  });
  it("should call the validateDropOff function given in props on drop off input blur", () => {
    render(<AddressInput {...sampleProps} />);
    const input = screen.getByPlaceholderText(placeholder.dropOff);
    fireEvent.change(input, { target: { value: "lalala" } });
    fireEvent.blur(input);
    expect(sampleProps.validateDropOff).toHaveBeenCalledTimes(1);
  });
  it("when loading prop is true, button should be rendered with loading text", () => {
    render(<AddressInput {...sampleProps} loading />);
    expect(screen.getByText(loadingText)).toBeInTheDocument();
  });
  it("when loading prop is false, button should be rendered with action text", () => {
    render(<AddressInput {...sampleProps} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
  it("when create job button is enabled, the onClick function given in props should be called on click", () => {
    render(
      <AddressInput
        {...sampleProps}
        pickUpIcon={IconType.PickUpSuccess}
        dropOffIcon={IconType.DropOffSuccess}
      />
    );
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(sampleProps.onClick).toHaveBeenCalledTimes(1);
  });
  it("when create job button is disabled, the onClick function given in props should not be called on click", () => {
    render(<AddressInput {...sampleProps} />);
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(sampleProps.onClick).toHaveBeenCalledTimes(0);
  });
});
