import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  height: 40px;
  box-shadow: 0 1px 2px 0 rgba(16, 162, 234, 0.3);
  background-image: linear-gradient(#10a2ea, #0f99e8);
  color: #ffffff;
  font-size: 16px;
  font-family: "Roboto-Black";
  border: none;
  cursor: pointer;
  :hover {
    opacity: 95%;
  }
  :disabled {
    opacity: 50%;
  }
`;

type ButtonProps = {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
};
const Button: React.VFC<ButtonProps> = ({ title, onClick, isDisabled }) => (
  <StyledButton disabled={isDisabled} onClick={onClick}>
    {title}
  </StyledButton>
);

export default Button;
