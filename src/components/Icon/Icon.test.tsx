import { render, screen } from "@testing-library/react";
import Icon, { IconType } from "./Icon";

describe("Icon component", () => {
  it("should render the icon corresponding to the name prop", () => {
    render(<Icon name={IconType.DropOffError} />);
    expect(screen.getByTitle("dropOffBadgeError")).toBeInTheDocument();
  });
});
