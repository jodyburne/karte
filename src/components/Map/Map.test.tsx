import { render, screen } from "@testing-library/react";
import Map from "./Map";

const sampleProps = {
  empty: {
    lat: null,
    lng: null,
  },
  location: {
    lat: 999,
    lng: 999,
  },
};
describe("Map component", () => {
  it("should render the PickUpMarker if the pick up marker longitude is present", () => {
    render(
      <Map
        pickUpMarker={sampleProps.location}
        dropOffMarker={sampleProps.empty}
      />
    );
    expect(screen.getByTitle("pickUpMarker")).toBeInTheDocument();
  });
  it("should render the DropOffMarker if the drop off marker longitude is present", () => {
    render(
      <Map
        pickUpMarker={sampleProps.empty}
        dropOffMarker={sampleProps.location}
      />
    );
    expect(screen.getByTitle("dropOffMarker")).toBeInTheDocument();
  });
  it("should not render the PickUpMarker if there is no pick up marker longitude present", () => {
    render(
      <Map pickUpMarker={sampleProps.empty} dropOffMarker={sampleProps.empty} />
    );
    expect(screen.queryByTitle("pickUpMarker")).not.toBeInTheDocument();
  });
  it("should not render the DropOffMarker if there is no drop off marker longitude present", () => {
    render(
      <Map pickUpMarker={sampleProps.empty} dropOffMarker={sampleProps.empty} />
    );
    expect(screen.queryByTitle("dropOffMarker")).not.toBeInTheDocument();
  });
});
