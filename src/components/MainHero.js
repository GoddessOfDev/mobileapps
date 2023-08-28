import React, { useState } from "react";
import styled, { withTheme } from "styled-components/macro";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Input from "../components/Input";


function MainHero(props) {
  const { appName, title, description, theme, ...rest } = props;
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <MainHeroContainer {...rest}>
      <MainHeroDetails>
        <MainHeroLogo>
          <MainHeroLogoIcon color={theme.colorBlue(1)} />
          <MainHeroLogoText>{appName}</MainHeroLogoText>
        </MainHeroLogo>
        <MainHeroTitle>{title}</MainHeroTitle>
        <MainHeroDescription>{description}</MainHeroDescription>
        <MainHeroActions>
          {false && (
            <Input
              value={inputValue}
              label="Enter your email"
              onChange={onChange}
            />
          )}
          <a
            href="https://olegreimers.netlify.app/#project-2"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Back to my portfolio
          </a>
          <p style={{ fontSize: "25px" }}>
            You can see these apps in my github. These are repositories.
          </p>
          <a
            href="https://github.com/olegreimers/9-Animator"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            9 Animator
          </a>
          <a
            href="https://github.com/olegreimers/DatingChat"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Chat - Dating app
          </a>
          <a
            href="https://github.com/olegreimers/food-ordering-swiftUI"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Food Ordering app
          </a>
          <a
            href="https://github.com/olegreimers/food-delivery-swift"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Food delivery
          </a>
          <a
            href="https://github.com/olegreimers/flutter-realtime-detection"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Realtime Person Detection
          </a>
          <a
            href="https://github.com/olegreimers/fitness-app-flutter"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Fitness app
          </a>
          <a
            href="https://github.com/olegreimers/movieapp-ReactNative"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Movie app
          </a>
          <a
            href="https://github.com/olegreimers/fashion-app"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#2979ff80",
            }}
          >
            Fashion app
          </a>
        </MainHeroActions>
      </MainHeroDetails>
      <MainHeroFooter />
    </MainHeroContainer>
  );
}

const MainHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 40;
  color: ${(props) => props.theme.colorText(1)};

  @media (max-width: ${(props) => props.theme.tablet}) {
    flex-direction: column;
  }
`;

const MainHeroDetails = styled.div`
  max-width: 560px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.desktop}) {
    max-width: 450px;
  }

  @media (max-width: ${(props) => props.theme.tablet}) {
    justify-content: center;
    text-align: center;
    padding: 80px 20px 40px;
    max-width: 500px;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding-top: 60px;
  }
`;

const MainHeroLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${(props) => props.theme.tablet}) {
    justify-content: center;
  }
`;

const MainHeroLogoIcon = styled(Logo)`
  width: 62px;
  margin-right: 16px;

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 56px;
    margin-right: 10px;
  }
`;

const MainHeroLogoText = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${(props) => props.theme.mobile}) {
    font-size: 20px;
  }
`;

const MainHeroTitle = styled.h2`
  font-size: 56px;
  font-weight: 600;
  margin: 20px 0 0;
  line-height: 1;
  margin-bottom: 5px;

  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 48px;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    font-size: 32px;
  }
`;

const MainHeroDescription = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorWhite(0.8)};

  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 22px;
  }

  @media (max-width: ${(props) => props.theme.tablet}) {
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
  }
`;

const MainHeroActions = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${(props) => props.theme.tablet}) {
    grid-template-columns: auto;
    max-width: 300px;
    align-self: center;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    max-width: 100%;
    width: 100%;
  }
`;


const MainHeroFooter = styled(Footer)`
  position: absolute;
  bottom: 0;

  @media (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`;

export default withTheme(MainHero);
