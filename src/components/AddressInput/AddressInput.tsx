import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon, { IconType } from "../Icon";

const Input = styled.input`
  border-radius: 4px;
  height: 32px;
  background: #f0f3f7;
  font-family: "Roboto-Regular";
  font-size: 16px;
  border: none;
  padding: 0 10px;
  outline: none;
  ::placeholder {
    color: #8596a6;
  }
  color: #252525;
`;

const Container = styled.div`
  background: #ffffff;
  position: absolute;
  left: 32px;
  top: 32px;
  z-index: 1;
  display: grid;
  grid-template-columns: min-content 1fr;
  column-count: 2;
  column-gap: 8px;
  row-gap: 8px;
  grid-template-rows: repeat(3, 1fr);
  width: fit-content;
  border-radius: 8px;
  padding: 16px;
  min-width: 400px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1);
`;

type AddressInputProps = {
  validatePickUp: (arg: string) => void;
  validateDropOff: (arg: string) => void;
  onClick: (arg: string, arg2: string) => void;
  pickUpIcon: IconType;
  dropOffIcon: IconType;
  loading?: boolean;
};

const AddressInput: React.VFC<AddressInputProps> = ({
  validatePickUp,
  validateDropOff,
  onClick,
  pickUpIcon,
  dropOffIcon,
  loading,
}) => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const isDisabled =
    pickUpIcon !== IconType.PickUpSuccess ||
    dropOffIcon !== IconType.DropOffSuccess;

  return (
    <Container>
      <Icon name={pickUpIcon} />
      <Input
        value={pickUp}
        onChange={(e) => setPickUp(e.target.value)}
        onBlur={() => pickUp !== "" && validatePickUp(pickUp)}
        placeholder="Pick up address"
      />
      <Icon name={dropOffIcon} />
      <Input
        value={dropOff}
        onChange={(e) => setDropOff(e.target.value)}
        onBlur={() => dropOff !== "" && validateDropOff(dropOff)}
        placeholder="Drop off address"
      />
      <div></div>
      <Button
        isDisabled={isDisabled || loading}
        onClick={() => onClick(pickUp, dropOff)}
        title={loading ? "Creating..." : "Create job"}
      />
    </Container>
  );
};

export default AddressInput;
