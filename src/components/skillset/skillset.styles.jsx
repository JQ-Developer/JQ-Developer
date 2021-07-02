import styled from "styled-components";
import { device } from "../../global-styles/breakpoints";

export const SkillsetComponentContainer = styled.section`
  max-width: 80%;
  margin: auto;
  text-align: center;
  h3 {
    margin-bottom: 2rem;
  }
  padding-top: 90px;
  margin-top: -90px;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 1rem;
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
`;

export const SkillCard = styled.div`
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.lightNavy};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.color.green};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 6px 6px 2px 1px rgba(0, 0, 14, 0.2);
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
    width: 75px;
    height: 75px;
  }
  @media ${device.mobileL} {
    width: 45px;
    height: 45px;
  }
`;

export const SkillDescription = styled.p`
  color: ${(props) => props.theme.color.slate};
  font-weight: 500;

  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
`;
