import { useElementOnScreen } from "../../utils/hooks";
import {
  ContactContainer,
  TitleContainer,
  DescriptionContainer,
  Emphasis,
  FooterContainer,
} from "./contact.styles";
import { Links, ContactLinksContainer } from "../header/header.styles";
import { FaFileAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <ContactContainer
      id="contact"
      ref={containerRef}
      className={isVisible ? "visible" : ""}
    >
      <TitleContainer>Get In Touch</TitleContainer>
      <DescriptionContainer>
        <p>
          I'm currently open to work as
          <Emphasis> Front-End Developer.</Emphasis>
        </p>
        <p>Let's get in touch and talk more about your projects.</p>
        <p>
          <Emphasis>jqv.developer@gmail.com</Emphasis>
        </p>
      </DescriptionContainer>
      <ContactLinksContainer
        className={isVisible ? "visible" : ""}
        align="center"
      >
        <Links href="mailto:jqv.developer@gmail.com" margin="0.5rem">
          <FaEnvelope className="icon" />
          <p>Email</p>
        </Links>
        <Links
          href="https://www.linkedin.com/in/jos%C3%A9-quintero-varela-b3b932206/"
          target="_blanked"
          margin="0.5rem"
        >
          <FaLinkedin className="icon" />
          <p>Linkdln</p>
        </Links>
      </ContactLinksContainer>
      <FooterContainer>
        <p>Designed and Developed by José Quintero.</p>
        <p>
          Built with
          <Emphasis> React.js</Emphasis> . Hosted on Github Pages.
        </p>
        <p>
          <Emphasis>2021</Emphasis>
        </p>
      </FooterContainer>
    </ContactContainer>
  );
};

export default ContactComponent;
