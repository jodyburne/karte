import { render, screen } from "@testing-library/react";
import Toast from ".";

const content = "Hello I am Ms Toast";
describe("Toast component", () => {
  it("should render the content provided", () => {
    render(<Toast content={content} />);
    expect(screen.getByText(content).innerHTML).toBe(content);
  });
});
