import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{
  shouldShow: boolean;
}>`
  position: absolute;
  right: 32px;
  top: 32px;
  z-index: ${({ shouldShow }) => (shouldShow ? 1 : 0)};
  border-radius: 8px;
  height: 40px;
  background: rgba(51, 51, 51, 0.9);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  font-family: "Roboto-Regular";
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  max-width: fit-content;
  padding: 0 20px;
  cursor: pointer;
`;

const Toast: React.VFC<{ content?: string }> = ({ content }) => {
  const [shouldShow, setShouldShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setShouldShow(false), 5000);
  }, []);
  return (
    <Container onClick={() => setShouldShow(false)} shouldShow={shouldShow}>
      <p>{content}</p>
    </Container>
  );
};

export default Toast;
