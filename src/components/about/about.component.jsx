import { SectionTitle, SectionDescription } from "../projects/projects.styles";
import { useElementOnScreen } from "../../utils/hooks";
import { AboutComponentContainer } from "./about.styles";
import { Emphasis } from "../contact/contact.styles";

const AboutComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <AboutComponentContainer
      ref={containerRef}
      className={isVisible ? "visible" : ""}
    >
      <SectionTitle>About Me</SectionTitle>
      <SectionDescription style={{ textAlign: "left" }}>
        <p>
          Hey! I'm José Quintero, I've been close to a computer since an early
          age, and been passionate about it ever since.
        </p>
        <p>
          I'm specialized in <Emphasis>Front End development</Emphasis> with
          experience building websites, web applications and translating a
          client’s vision to an actual functional website. With knowledge in
          technologies such as JavaScript, CSS/Sass HTML5, React js, and others.
        </p>
        <p>
          Do you have a project in mind?{" "}
          <a href="#contact">
            <Emphasis>Get in touch!</Emphasis>
          </a>
        </p>
      </SectionDescription>
    </AboutComponentContainer>
  );
};

export default AboutComponent;
