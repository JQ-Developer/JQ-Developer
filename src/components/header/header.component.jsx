import {
  HeaderContainer,
  Header,
  WelcomeMessageContainer,
  TitleContainer,
  NameContainer,
  DescriptionContainer,
  TextContainer,
  ContactLinksContainer,
  Links,
} from "./header.styles";

import { useElementOnScreen } from "../../utils/hooks";
import Particles from "react-particles-js";
import params from "../../utils/particles.config";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeaderComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <HeaderContainer>
      <Header ref={containerRef}>
        <Particles className="particles" width="100vw" params={params} />
        <TitleContainer className={isVisible ? "visible" : ""}>
          <WelcomeMessageContainer>
            <p>Hey There! I'm-</p>
            <img src="https://svgsilh.com/svg/26432.svg" />
          </WelcomeMessageContainer>
          <NameContainer>José Quintero.</NameContainer>
        </TitleContainer>
        <DescriptionContainer className={isVisible ? "visible" : ""}>
          <span className="profession">Web Developer. </span>Self-taught
          developer with a <br />
          big interest in Computer Science.
        </DescriptionContainer>
        <TextContainer className={isVisible ? "visible" : ""}>
          <p>🚀 Exploring opportunities and helping you with your projects.</p>
          <p>💻 Specialized in building exceptional digital experiences.</p>
        </TextContainer>
        <ContactLinksContainer
          className={isVisible ? "visible" : ""}
          align="flex-start"
        >
          <Links href="#" margin="0 1.3rem 0 0">
            <FaGithub className="icon" />
            <p>Github</p>
          </Links>
          <Links href="#" margin="0 1.3rem 0 0">
            <FaLinkedin className="icon" />
            <p>Linkdln</p>
          </Links>
          <Links href="#" margin="0 1.3rem 0 0">
            <FaEnvelope className="icon" />
            <p>Email</p>
          </Links>
        </ContactLinksContainer>
      </Header>
    </HeaderContainer>
  );
};

export default HeaderComponent;
