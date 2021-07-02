import styled, { css } from "styled-components";
import { Animation } from "../header/header.styles";
import { device } from "../../global-styles/breakpoints";

export const ProjectsContainer = styled.section`
  max-width: 80%;
  margin: auto;

  min-height: 100vh;
  position: relative;

  padding-top: 20px;
`;

//////////////////////////////////
//DOTS PATTERN////////

export const Dots = styled.div`
  img {
    width: ${(props) => props.width};

    position: absolute;
    filter: invert(10%) sepia(17%) saturate(4340%) hue-rotate(192deg)
      brightness(96%) contrast(95%);
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    z-index: 1;

    @media ${device.laptop} {
      width: 200px;
    }

    @media ${device.tablet} {
      top: 3%;
      left: 69%;
    }

    @media (max-width: 580px) {
      width: 150px;
      top: 6%;
    }

    @media ${device.mobileL} {
      width: 100px;
      top: 8%;
    }

    @media ${device.mobileS} {
      width: 100px;
      left: 59%;
    }
  }
`;
//////////////////////////////////

export const ProjectsGrid = styled.div`
  margin: 6.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 500px));
  grid-gap: 4rem;
  align-items: flex-start;
  position: relative;
  z-index: 5;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
  }
`;

export const DescriptionContainer = styled.div`
  line-height: 1.5;
  align-self: flex-start;

  a {
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.color.green};
    font-size: 1.3rem;
    font-weight: 500;

    transition: color 0.2s ease-in-out;

    .icon {
      font-size: 1rem;
      margin-left: 0.5rem;
    }

    &:hover {
      color: #ff9114;
    }
  }

  transition: all 0.4s ease-in-out;
  ${Animation}
`;

export const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  font-size: 1.8rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightNavy};
`;

export const SectionDescription = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.slate};

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.color.lightNavy};
  border-radius: 10px;

  position: relative;
  z-index: 5;

  box-shadow: 6px 6px 2px 1px rgba(0, 0, 14, 0.2);

  transition: all 0.4s ease-in-out;
  ${Animation}

  @media ${device.tablet} {
    ${(props) => (props.odd ? "" : "")}
  }

  @media ${device.mobileS} {
    margin: 2rem 0;
  }

  @media (min-width: 861px) {
    ${(props) => (props.odd ? "margin-top:-18rem" : "")}
  } ;
`;

export const ImageContainer = styled.div`
  width: 100%;
  //height: 260px;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const CardText = styled.div`
  padding: 1rem;
  @media ${device.mobileS} {
    padding: 0.5rem;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.color.white};
  font-size: 1.6rem;

  .icon {
    margin-left: 0.8rem;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.color.green};
    }
  }

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

export const TechnologiesTag = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightestNavy};
`;

export const ProjectDescription = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.color.slate};
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
`;

//////////////////////////////////
//TAGS FOR EACH TECHNOLOGY////////

//STYLES FOR EACH TAG
const TagsStyles = css`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1rem;
  p {
    margin-left: 0.4rem;
  }

  @media ${device.mobileL} {
    padding: 0.1rem 0.2rem;
    font-size: 0.7rem;
  }
`;

//PERSONALIZED TAGS
export const JsTag = styled.div`
  ${TagsStyles}
  color: #ffff57;
  background-color: #fafac85f;
`;

export const ReactTag = styled.div`
  ${TagsStyles}
  color: #00d9ff;
  background-color: #1b79b845;
`;

export const SassTag = styled.div`
  ${TagsStyles}
  color: #ffa2b2;
  background-color: #fad1d849;
`;
