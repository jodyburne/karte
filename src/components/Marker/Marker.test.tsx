import { render, screen } from "@testing-library/react";
import Marker from "./Marker";
import { IconType } from "../Icon";

describe("Marker component", () => {
  it("should should render Drop off Marker svg if icon name prop is DropOffMarker", () => {
    render(<Marker iconName={IconType.DropOffMarker} />);
    expect(screen.getByTitle("dropOffMarker")).toBeInTheDocument();
  });
  it("should should render Pick up Marker svg if other icon name is provided", () => {
    render(<Marker iconName={IconType.PickUpMarker} />);
    expect(screen.getByTitle("pickUpMarker")).toBeInTheDocument();
  });
});
