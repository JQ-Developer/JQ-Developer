import {
  SkillsetComponentContainer,
  SkillGrid,
  SkillCard,
  ImageContainer,
  SkillDescription,
} from "./skillset.styles";
import { SectionTitle } from "../projects/projects.styles";
import JavaScriptLogo from "../../assets/skills/javascript.svg";
import HTML5Logo from "../../assets/skills/html5.svg";
import cssLogo from "../../assets/skills/css3.svg";
import gitLogo from "../../assets/skills/git.svg";
import githubLogo from "../../assets/skills/github.svg";
import reactLogo from "../../assets/skills/react.svg";
import reduxLogo from "../../assets/skills/redux.svg";
import sassLogo from "../../assets/skills/sass.svg";
import npmLogo from "../../assets/skills/npm.svg";
import yarnLogo from "../../assets/skills/yarn.svg";

const SkillsetComponent = () => {
  return (
    <SkillsetComponentContainer id="skills">
      <SectionTitle>Skillset</SectionTitle>
      <SkillGrid>
        <SkillCard>
          <ImageContainer>
            <img src={HTML5Logo} alt="Html5" />
          </ImageContainer>
          <SkillDescription>HTML 5</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={cssLogo} alt="css3 " />
          </ImageContainer>
          <SkillDescription>CSS3</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={JavaScriptLogo} alt="ES6+" />
          </ImageContainer>
          <SkillDescription>ES6+</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={reactLogo} alt="react18" />
          </ImageContainer>
          <SkillDescription>React Js</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={reduxLogo} alt="redux" />
          </ImageContainer>
          <SkillDescription>Redux</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={sassLogo} alt="sass" />
          </ImageContainer>
          <SkillDescription>Sass</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={gitLogo} alt="git" />
          </ImageContainer>
          <SkillDescription>Git</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={githubLogo} alt="gitHub" />
          </ImageContainer>
          <SkillDescription>GitHub</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={npmLogo} alt="npm" />
          </ImageContainer>
          <SkillDescription>npm</SkillDescription>
        </SkillCard>
        <SkillCard>
          <ImageContainer>
            <img src={yarnLogo} alt="yarn" />
          </ImageContainer>
          <SkillDescription>Yarn</SkillDescription>
        </SkillCard>
      </SkillGrid>
    </SkillsetComponentContainer>
  );
};

export default SkillsetComponent;
