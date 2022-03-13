import styled from "styled-components";

const StyledInput = styled.input`
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

const Input: React.VFC = () => <StyledInput placeholder="hellloooo" />;

export default Input;
