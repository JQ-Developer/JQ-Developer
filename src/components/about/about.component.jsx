import { SectionTitle, SectionDescription } from "../projects/projects.styles";
import { useElementOnScreen } from "../../utils/hooks";
import { AboutComponentContainer } from "./about.styles";

const AboutComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  return (
    <AboutComponentContainer
      ref={containerRef}
      className={isVisible ? "visible" : ""}
    >
      <SectionTitle>About Me</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio
        eaque explicabo reprehenderit quod possimus iure, aliquid omnis.
        Veritatis voluptatum iste maxime reprehenderit. Ullam aspernatur fuga
        possimus et neque porro. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Doloribus atque, mollitia aperiam tempora beatae
        recusandae ea culpa temporibus ratione voluptate! Natus dolorum
        blanditiis aliquam. Hic repellendus magni deserunt iste tempore?
      </SectionDescription>
    </AboutComponentContainer>
  );
};

export default AboutComponent;
