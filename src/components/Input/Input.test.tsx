import Input from ".";
import { screen, render } from "@testing-library/react";

describe("Input component", () => {
  it("should be rendered", () => {
    render(<Input />);
  });
});
