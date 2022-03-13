import DropOffBadge from "./DropOffBadge";
import DropOffBadgeError from "./DropOffBadgeError";
import DropOffBadgeSuccess from "./DropOffBadgeSuccess";
import DropOffMarker from "./DropOffMarker";
import PickUpBadge from "./PickUpBadge";
import PickUpBadgeError from "./PickUpBadgeError";
import PickUpBadgeSuccess from "./PickUpBadgeSuccess";
import PickUpMarker from "./PickUpMarker";

export enum IconType {
  DropOffNeutral = "DropOffNeutral",
  DropOffError = "DropOffError",
  DropOffSuccess = "DropOffSuccess",
  DropOffMarker = "DropOffMarker",
  PickUpNeutral = "PickUpNeutral",
  PickUpError = "PickUpError",
  PickUpSuccess = "PickUpSuccess",
  PickUpMarker = "PickUpMarker",
}

const Icon: React.VFC<{ name: IconType }> = ({ name }) => {
  switch (name) {
    case IconType.DropOffNeutral:
      return <DropOffBadge />;
    case IconType.DropOffError:
      return <DropOffBadgeError />;
    case IconType.DropOffSuccess:
      return <DropOffBadgeSuccess />;
    case IconType.DropOffMarker:
      return <DropOffMarker />;
    case IconType.PickUpNeutral:
      return <PickUpBadge />;
    case IconType.PickUpError:
      return <PickUpBadgeError />;
    case IconType.PickUpSuccess:
      return <PickUpBadgeSuccess />;
    case IconType.PickUpMarker:
      return <PickUpMarker />;
    default:
      return <DropOffBadge />;
  }
};

export default Icon;
