import PickUpMarker from "../Icon/PickUpMarker";
import DropOffMarker from "../Icon/DropOffMarker";
import { IconType } from "../Icon";

type MarkerProps = {
  lat?: number | null;
  lng?: number | null;
  iconName: IconType;
};
const Marker = (props: MarkerProps) => {
  if (props.iconName === IconType.DropOffMarker) return <DropOffMarker />;
  return <PickUpMarker />;
};
export default Marker;
