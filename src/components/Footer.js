import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <FooterWrapper className={props.className}>
    <FooterRow>
      <FooterLink to="/support">Support</FooterLink>
      <FooterAnchor target="_blank" rel="noopener noreferrer" href="mailto:contact@gamestackapp.com">Contact</FooterAnchor>
      <FooterLink to="/terms">Legal</FooterLink>
      <FooterAnchor target="_blank" rel="noopener noreferrer" href="https://twitter.com/gamestackapp">Twitter</FooterAnchor>
      <FooterAnchor faded target="_blank" rel="noopener noreferrer" href="https://hamishw.com">
        {`© ${new Date().getFullYear()} Hamish Williams`}
      </FooterAnchor>
    </FooterRow>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  position: relative;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-end;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin: 15px;
  display: block;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
  color: ${props => props.faded
    ? props.theme.colorText(0.4)
    : props.theme.colorText(0.8)};

  &:hover {
    text-decoration-color: ${props => props.faded
    ? props.theme.colorText(0.2)
    : props.theme.colorText(0.6)};
  }
`;

const FooterAnchor = FooterLink.withComponent('a');

export default Footer;
