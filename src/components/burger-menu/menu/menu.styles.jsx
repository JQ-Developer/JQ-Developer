import styled from "styled-components";
import { device } from "../../../global-styles/breakpoints";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.color.lightNavy};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);

  transition: transform 0.3s ease-in-out;
  z-index: 25;

  a {
    font-size: 1.8rem;
    padding: 2rem;
    letter-spacing: 0.2rem;
    color: ${(props) => props.theme.color.white};
    transition: color 0.3s linear;

    @media (max-width: 480px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.color.green};
    }
  }

  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  @media (min-width: 861px) {
    display: none;
  }

  @media ${device.mobileL} {
    transform: translateX(350%);

    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(350%)")};
  }
`;
