import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Header = ({ transparent, white, fixed = true, status }) => (
  <React.Fragment>
    <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
    <HeaderContainer transparent={transparent} fixed={fixed} status={status}>
      <HeaderLogo to="/">
        <HeaderLogoIcon white={white} />
        <HeaderLogoText>My mobile apps</HeaderLogoText>
      </HeaderLogo>
    </HeaderContainer>
  </React.Fragment>
);

const HeaderContainer = styled.header`
  height: 68px;
  width: 100%;
  z-index: 512;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: opacity 0.4s ease;
  background: ${(props) =>
    props.transparent ? "transparent" : props.theme.colorBackgroundDark()};
  opacity: ${(props) => (props.status === "entered" ? 1 : 0)};
`;

const SkipToMain = styled.a`
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: ${(props) => props.theme.colorBackground()};
  z-index: 2048;

  &:focus {
    background: ${(props) => props.theme.colorBlue()};
    border-radius: 6px;
    padding: 8px 16px;
    position: fixed;
    top: 16px;
    left: 16px;
    clip: auto;
    width: auto;
    height: auto;
    text-decoration: none;
    font-weight: 500;
    line-height: 1;
  }
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const HeaderLogoIcon = styled(Logo)`
  width: 54px;
  fill: ${(props) =>
    props.white ? props.theme.colorWhite() : props.theme.colorBlue()};
  margin-right: 10px;
`;

const HeaderLogoText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colorText()};

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: none;
  }
`;


export default Header;
