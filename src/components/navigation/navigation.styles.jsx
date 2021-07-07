import styled from "styled-components";
import { device } from "../../global-styles/breakpoints";

export const NavigationContainer = styled.div`
  background-color: ${(props) => props.theme.color.navy};
  color: ${(props) => props.theme.color.white};
  border-bottom: 1px solid ${(props) => props.theme.color.lightestNavy};
  height: 74px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media ${device.mobileL} {
    height: 50px;
  }
`;

export const Navigation = styled.nav`
  font-family: ${(props) => props.theme.font};

  height: 100%;
  width: 80%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.a`
  font-size: 2rem;
  font-weight: 600;

  transition: all 0.5s ease-in-out;
  transform: scale(0.7);
  width: 50px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  opacity: 0;

  &.visible {
    transform: scale(1);
    opacity: 1;
  }

  @media ${device.tablet} {
    transform: translateY(0);
    opacity: 1;
  }

  @media ${device.mobileL} {
    width: 40px;
    transform: translateX(-25px);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.color.white};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.lightestNavy};
      color: ${(props) => props.theme.color.green};
    }
  }

  transition: all 0.5s ease-in-out;

  transform: translateY(-10px);
  opacity: 0;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  @media ${device.tablet} {
    display: none;
  }
`;
