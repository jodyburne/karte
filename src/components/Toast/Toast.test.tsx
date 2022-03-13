import { render, screen } from "@testing-library/react";
import Toast from ".";

describe("Toast component", () => {
  it("it should render", () => {
    render(<Toast />);
    //expect(screen.container).toBeTruthy();
  });
});
