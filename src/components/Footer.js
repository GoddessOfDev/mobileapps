import React from "react";
import styled from "styled-components/macro";

const Footer = (props) => (
  <FooterWrapper className={props.className}></FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export default Footer;
