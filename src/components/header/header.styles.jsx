import styled, { css } from "styled-components";
import { device } from "../../global-styles/breakpoints";

export const Animation = css`
  transform: translateY(50px);
  opacity: 0;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
  height: calc(100vh - 74px);
  width: 80%;

  margin: 2rem auto;
  margin-top: 74px;
  position: relative;

  @media ${device.tablet} {
    margin-top: 10rem;
  }
  @media (max-width: 550px) {
    margin-top: 7rem;
  }

  @media ${device.mobileM} {
    margin-top: 5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  position: relative;

  .particles {
    position: absolute;
    left: -160px;
    z-index: 10;
    overflow: hidden;

    @media ${device.tablet} {
      left: -106px;
    }

    @media (max-width: 670px) {
      left: -100px;
      height: 70vh;
    }

    @media ${device.mobileL} {
      left: -40px;
      height: 90vh;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 5rem;
  line-height: 1;
  transition: all 0.6s ease-in-out;
  ${Animation}

  @media ${device.tablet} {
    margin-top: 1rem;
  }
`;

export const WelcomeMessageContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.green};
  position: relative;

  p {
    position: relative;
    z-index: 10;
  }

  img {
    filter: invert(10%) sepia(17%) saturate(4340%) hue-rotate(192deg)
      brightness(96%) contrast(95%);
    width: 150px;
    position: absolute;
    top: -20px;
    left: -35px;
    z-index: 1;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
`;

export const NameContainer = styled.h1`
  font-size: 7.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    font-size: 5rem;
  }

  @media (max-width: 650px) {
    font-size: 4rem;
  }

  @media ${device.mobileM} {
    font-size: 3rem;
  }
`;

export const DescriptionContainer = styled.div`
  line-height: 1.2;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.slate};

  span {
    color: ${(props) => props.theme.color.white};
  }
  margin-bottom: 2.5rem;
  transition: all 0.6s ease-in-out;
  ${Animation}

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
`;

export const TextContainer = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.slate};
  margin-bottom: 2.5rem;
  transition: all 0.6s ease-in-out;
  ${Animation}

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }

  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
`;

export const ContactLinksContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  transition: all 0.6s ease-in-out;
  z-index: 20;
  ${Animation}
`;

export const Links = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.margin};

  padding: 0.4rem 1.2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.lightestNavy};

  transition: background-color 0.2s ease-in-out;

  .icon {
    color: ${(props) => props.theme.color.green};
    margin-right: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${(props) => props.theme.color.white};
    font-weight: 600;
    @media ${device.tablet} {
      font-size: 1rem;
    }
    @media (max-width: 650px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.color.slate};
  }

  @media ${device.mobileL} {
    padding: 0.2rem 0.8rem;
  }
  @media ${device.mobileM} {
    padding: 0.2rem 0.3rem;
    margin: 0.2rem;
    p {
      font-size: 0.8rem;
    }
  }
`;
