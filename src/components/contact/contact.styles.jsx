import styled from "styled-components";
import { Animation } from "../header/header.styles";
import { device } from "../../global-styles/breakpoints";

export const ContactContainer = styled.div`
  margin-top: 15.5rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color.white};

  transition: all 0.4s ease-in-out;
  ${Animation};

  @media ${device.tablet} {
    margin-top: 10.5rem;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 3.1rem;
  margin-bottom: 1.8rem;

  @media ${device.mobileM} {
    font-size: 2.3rem;
  }
`;

export const DescriptionContainer = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.color.slate};
  margin-bottom: 3rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.color.green};
`;

export const FooterContainer = styled.footer`
  margin-top: 14rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  color: ${(props) => props.theme.color.white};

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
