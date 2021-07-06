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
  ReduxTag,
  StyledCompTag,
  FirebaseTag,
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
import { SiRedux, SiStyledComponents, SiFirebase } from "react-icons/si";

import countries from "../../assets/projects/country.png";
import eShop from "../../assets/projects/e-shop.png";
import landingPage from "../../assets/projects/clipboard.png";

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
          <a
            target="_blanked"
            href="https://great-clothes-store.herokuapp.com/"
          >
            <ImageContainer>
              <img src={eShop} alt="E-eshop" />
            </ImageContainer>
          </a>

          <CardText>
            <CardTitle>
              <h3>Crwon E-Shop</h3>
              <div>
                <a
                  target="_blanked"
                  title="live sample"
                  href="https://portfolio-e-commerce.herokuapp.com/"
                >
                  <FaExternalLinkAlt className="icon" />
                </a>
                <a
                  target="_blanked"
                  title="live sample"
                  href="https://github.com/JQ-Developer/e-commerce-protfolio"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </CardTitle>

            <TechnologiesTag>
              <ReactTag>
                <FaReact />
                <p>React</p>
              </ReactTag>
              <ReduxTag>
                <SiRedux />
                <p>Redux</p>
              </ReduxTag>
              <FirebaseTag>
                <SiFirebase />
                <p>Firebase</p>
              </FirebaseTag>
            </TechnologiesTag>

            <ProjectDescription>
              A digital shop that allows users to buy clothes, stripe pay system
              integrated, made using redux-sagas. Includes CRUD, FireBase as
              data base and google Gmail for authentication. Styled with Styled
              Components.
            </ProjectDescription>
          </CardText>
        </ProjectCard>

        <ProjectCard odd="odd" className={isVisible ? "visible" : ""}>
          <a href="https://countries-rest-api-react.vercel.app/">
            <ImageContainer>
              <img src={countries} alt="countries Api" />
            </ImageContainer>
          </a>

          <CardText>
            <CardTitle>
              <h3>Rest Country API</h3>
              <div>
                <a
                  href="https://countries-rest-api-react.vercel.app/"
                  target="_blanked"
                  title="live sample"
                >
                  <FaExternalLinkAlt className="icon" />
                </a>
                <a
                  target="_blanked"
                  title="github code"
                  href="https://github.com/JQ-Developer/countries-rest-api"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </CardTitle>

            <TechnologiesTag>
              <SassTag>
                <FaSass />
                <p>Sass</p>
              </SassTag>
              <JsTag>
                <FaJs />
                <p>JavaScript</p>
              </JsTag>

              <ReactTag>
                <FaReact />
                <p>React</p>
              </ReactTag>
            </TechnologiesTag>

            <ProjectDescription>
              A web app that integrates the REST Countries API to pull country
              data and display it, users are able to see all countries from the
              API on the homepage, click on a country and see more detailed
              information and much more,it's also totally responsible, see the
              live sample!
            </ProjectDescription>
          </CardText>
        </ProjectCard>

        <ProjectCard className={isVisible ? "visible" : ""}>
          <a href="https://challenge-2-landing-page.vercel.app/">
            <ImageContainer>
              <img src={landingPage} alt="landingPage" />
            </ImageContainer>
          </a>

          <CardText>
            <CardTitle>
              <h3>Clipboard Landing Page</h3>
              <div>
                <a
                  href="https://challenge-2-landing-page.vercel.app/"
                  target="_blanked"
                  title="live sample"
                >
                  <FaExternalLinkAlt className="icon" />
                </a>
                <a
                  target="blanked"
                  title="github code"
                  href="https://github.com/JQ-Developer/Challenge-2-Landing-page"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </CardTitle>

            <TechnologiesTag>
              <SassTag>
                <FaSass />
                <p>Sass</p>
              </SassTag>
              <JsTag>
                <FaJs />
                <p>JavaScript</p>
              </JsTag>
            </TechnologiesTag>

            <ProjectDescription>
              Landing page as part of a challenge, where users are able to view
              the optimal layout for the site depending on their device's screen
              size and see hover states for all interactive elements on the
              page.
            </ProjectDescription>
          </CardText>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
