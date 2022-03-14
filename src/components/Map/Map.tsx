import GoogleMapReact from "google-map-react";
import { IconType } from "../Icon";
import Marker from "../Marker";

const location = {
  address: "Place de la Concorde, Paris",
  lat: 48.86608479199407,
  lng: 2.3213429883544396,
};

export type Location = {
  lat?: number | null;
  lng?: number | null;
};

type MapProps = {
  pickUpMarker: Location;
  dropOffMarker: Location;
};

const Map: React.VFC<MapProps> = ({ pickUpMarker, dropOffMarker }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: "get your own key" }}
    defaultCenter={location}
    defaultZoom={15}
    style={{ height: "100%" }}
  >
    {pickUpMarker.lng && (
      <Marker
        iconName={IconType.PickUpMarker}
        lat={pickUpMarker.lat}
        lng={pickUpMarker.lng}
      />
    )}
    {dropOffMarker.lng && (
      <Marker
        iconName={IconType.DropOffMarker}
        lat={dropOffMarker.lat}
        lng={dropOffMarker.lng}
      />
    )}
  </GoogleMapReact>
);

export default Map;
