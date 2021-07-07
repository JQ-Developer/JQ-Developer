import { useElementOnScreen, useOnclickOutside } from "../../utils/hooks";
import {
  Navigation,
  LogoContainer,
  LinksContainer,
  NavigationContainer,
} from "./navigation.styles";

import { Burger, Menu } from "../burger-menu";
import { useRef, useState } from "react";
import logo from "../../assets/50x50.png";

const NavigationComponent = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnclickOutside(node, () => setOpen(false));

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <NavigationContainer>
      <div ref={node} className="menu">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Navigation>
        <LogoContainer
          ref={containerRef}
          className={isVisible ? "visible" : ""}
          href="/"
        >
          <img src={logo} alt="logo" />
        </LogoContainer>{" "}
        <LinksContainer
          ref={containerRef}
          className={isVisible ? "visible" : ""}
        >
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </LinksContainer>
      </Navigation>
    </NavigationContainer>
  );
};

export default NavigationComponent;
