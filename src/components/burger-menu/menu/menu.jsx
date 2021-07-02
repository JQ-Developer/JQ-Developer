import { useOnclickOutside } from "../../../utils/hooks";
import { useState, useRef } from "react";
import { StyledMenu } from "./menu.styles";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a href="#" onClick={() => setOpen(!open)}>
        Home
      </a>
      <a href="#projects" onClick={() => setOpen(!open)}>
        Projects
      </a>
      <a href="#skills" onClick={() => setOpen(!open)}>
        Skillset
      </a>
      <a href="#contact" onClick={() => setOpen(!open)}>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
