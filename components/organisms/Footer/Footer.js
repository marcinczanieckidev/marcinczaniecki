import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.div``;

const Footer = ({ children }) => (
  <Wrapper>
    <CopyRight>{children}©</CopyRight>
  </Wrapper>
);

export default Footer;
