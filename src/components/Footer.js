import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Footer = (props) => (
  <FooterWrapper className={props.className}></FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;


const FooterLink = styled(Link)`
  margin: 15px;
  display: block;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
  color: ${(props) =>
    props.faded ? props.theme.colorText(0.5) : props.theme.colorText(0.8)};

  &:hover {
    text-decoration-color: ${(props) =>
      props.faded ? props.theme.colorText(0.4) : props.theme.colorText(0.6)};
  }
`;

export default Footer;
