import NavigationComponent from "./components/navigation/navigation.component";
import HeaderComponent from "./components/header/header.component";
import AboutComponent from "./components/about/about.component";
import ProjectsComponent from "./components/projects/projects.component";
import SkillsetComponent from "./components/skillset/skillset.component";
import ContactComponent from "./components/contact/contact.component";
import { ThemeProvider } from "styled-components";
import theme from "./global-styles/theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationComponent />
      <HeaderComponent />
      <AboutComponent />
      <ProjectsComponent />
      <SkillsetComponent />
      <ContactComponent />
    </ThemeProvider>
  );
}

export default App;
