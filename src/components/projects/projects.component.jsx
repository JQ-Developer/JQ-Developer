import { useElementOnScreen } from "../../utils/hooks";
import {
  ProjectsContainer,
  ProjectsGrid,
  DescriptionContainer,
  ProjectCard,
  ImageContainer,
  CardText,
  CardTitle,
  TechnologiesTag,
  ProjectDescription,
  JsTag,
  ReactTag,
  SassTag,
  SectionTitle,
  SectionDescription,
  Dots,
} from "./projects.styles";

import {
  FaLongArrowAltRight,
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import countries from "../../assets/projects/country.png";
import dice from "../../assets/dice.png";
import land from "../../assets/land.png";

const ProjectsComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <ProjectsContainer id="projects">
      <Dots width="300px" top="5%" left="75%">
        <img src="https://svgsilh.com/svg/26432.svg" />
      </Dots>
      <ProjectsGrid>
        <DescriptionContainer
          ref={containerRef}
          className={isVisible ? "visible" : ""}
        >
          <SectionTitle>Creative works</SectionTitle>
          <SectionDescription>
            Here are some of the projects that I've worked on.
          </SectionDescription>
          <a href="#">
            See More <FaLongArrowAltRight className="icon" />
          </a>
        </DescriptionContainer>
        <ProjectCard className={isVisible ? "visible" : ""}>
          <ImageContainer>
            <img src={countries} alt="girl" />
          </ImageContainer>

          <CardText>
            <CardTitle>
              <h3>Rest Country API</h3>
              <div>
                <a href="">
                  <FaExternalLinkAlt className="icon" />
                </a>
                <a href="">
                  <FaGithub className="icon" />
                </a>
              </div>
            </CardTitle>

            <TechnologiesTag>
              <JsTag>
                <FaJs />
                <p>JavaScript</p>
              </JsTag>

              <ReactTag>
                <FaReact />
                <p>React</p>
              </ReactTag>

              <SassTag>
                <FaSass />
                <p>Sass</p>
              </SassTag>
            </TechnologiesTag>

            <ProjectDescription>
              A website that provides roadmap for various fields in Programming
              and help people learn to code for free.
            </ProjectDescription>
          </CardText>
        </ProjectCard>

        <ProjectCard odd="odd" className={isVisible ? "visible" : ""}>
          <ImageContainer>
            <img src={land} alt="girl" />
          </ImageContainer>

          <CardText>
            <CardTitle>
              <h3>Rest Country API</h3>
              <div>
                <FaExternalLinkAlt className="icon" />
                <FaGithub className="icon" />
              </div>
            </CardTitle>

            <TechnologiesTag>
              <JsTag>
                <FaJs />
                <p>JavaScript</p>
              </JsTag>

              <ReactTag>
                <FaReact />
                <p>React</p>
              </ReactTag>

              <SassTag>
                <FaSass />
                <p>Sass</p>
              </SassTag>
            </TechnologiesTag>

            <ProjectDescription>
              A website that provides roadmap for various fields in Programming
              and help people learn to code for free.
            </ProjectDescription>
          </CardText>
        </ProjectCard>

        <ProjectCard className={isVisible ? "visible" : ""}>
          <ImageContainer>
            <img src={dice} alt="girl" />
          </ImageContainer>

          <CardText>
            <CardTitle>
              <h3>Rest Country API</h3>
              <div>
                <FaExternalLinkAlt className="icon" />
                <FaGithub className="icon" />
              </div>
            </CardTitle>

            <TechnologiesTag>
              <JsTag>
                <FaJs />
                <p>JavaScript</p>
              </JsTag>

              <ReactTag>
                <FaReact />
                <p>React</p>
              </ReactTag>

              <SassTag>
                <FaSass />
                <p>Sass</p>
              </SassTag>
            </TechnologiesTag>

            <ProjectDescription>
              A website that provides roadmap for various fields in Programming
              and help people learn to code for free.
            </ProjectDescription>
          </CardText>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
