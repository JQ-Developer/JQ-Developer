import { Animation } from "../header/header.styles";
import styled from "styled-components";
import { device } from "../../global-styles/breakpoints";

export const AboutComponentContainer = styled.div`
  max-width: 80%;
  margin: auto;

  text-align: center;
  margin-bottom: 5rem;
  margin-top: 0.5rem;
  z-index: 15;

  h3 {
    margin-bottom: 2rem;
  }
  transition: all 0.4s ease-in-out;
  ${Animation}

  @media (max-width: 1025px) {
    margin-top: -2.8rem;
  }
  @media ${device.tablet} {
    margin: 3rem auto;
    margin-top: -10rem;
  }

  @media (max-width: 490px) {
    margin: 4rem auto;
    margin-top: 0rem;

    text-align: left;
  }

  @media ${device.mobileL} {
    margin-top: -7rem;
    margin-bottom: 2rem;
  }
  @media ${device.mobileM} {
    margin-top: -2rem;
  }

  @media ${device.mobileS} {
    margin-top: 0rem;
  }
`;
