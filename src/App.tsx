import { useEffect, useMemo, useState } from "react";
import {
  useCreateJobMutation,
  useGetGeocodeLazyQuery,
} from "./generated/graphql";
import Toast from "./components/Toast";
import AddressInput from "./components/AddressInput";
import Map, { Location } from "./components/Map";
import { IconType } from "./components/Icon";

function App() {
  const [getPickUpGeocode, { data: pickUpData }] = useGetGeocodeLazyQuery();
  const [getDropOffGeocode, { data: dropOffData }] = useGetGeocodeLazyQuery();
  const [createJob, { data: jobData, loading: jobLoading }] =
    useCreateJobMutation();
  const emptyLocation = useMemo(
    () => ({
      lat: null,
      lng: null,
    }),
    []
  );
  const [pickUpIcon, setPickUpIcon] = useState(IconType.PickUpNeutral);
  const [dropOffIcon, setDropOffIcon] = useState(IconType.DropOffNeutral);
  const [pickUpLocation, setPickUpLocation] = useState<Location>(emptyLocation);
  const [dropOffLocation, setDropOffLocation] =
    useState<Location>(emptyLocation);

  const validatePickUp = (address: string) => {
    getPickUpGeocode({ variables: { address: address } });
  };
  const validateDropOff = (address: string) => {
    getDropOffGeocode({ variables: { address } });
  };

  const handleCreateJob = (pickup: string, dropoff: string) =>
    createJob({
      variables: {
        pickup,
        dropoff,
      },
    });

  useEffect(() => {
    if (pickUpData?.geocode) {
      setPickUpLocation({
        lat: pickUpData?.geocode?.latitude,
        lng: pickUpData?.geocode?.longitude,
      });
      setPickUpIcon(IconType.PickUpSuccess);
      return;
    }
    if (pickUpData?.geocode === null) {
      setPickUpIcon(IconType.PickUpError);
      setPickUpLocation(emptyLocation);
    }
  }, [pickUpData, emptyLocation]);

  useEffect(() => {
    if (dropOffData?.geocode) {
      setDropOffLocation({
        lat: dropOffData?.geocode?.latitude,
        lng: dropOffData?.geocode?.longitude,
      });
      setDropOffIcon(IconType.DropOffSuccess);
      return;
    }
    if (dropOffData?.geocode === null) {
      setDropOffIcon(IconType.DropOffError);
      setDropOffLocation(emptyLocation);
    }
  }, [dropOffData, emptyLocation]);

  return (
    <div>
      <AddressInput
        dropOffIcon={dropOffIcon}
        pickUpIcon={pickUpIcon}
        validatePickUp={validatePickUp}
        validateDropOff={validateDropOff}
        onClick={handleCreateJob}
        loading={jobLoading}
      />

      {jobData?.job && <Toast content="Job has been created successfully!" />}
      <Map pickUpMarker={pickUpLocation} dropOffMarker={dropOffLocation} />
    </div>
  );
}

export default App;
