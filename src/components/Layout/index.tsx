import type { Component } from "solid-js";
import { ILayout } from "../../utils/interfaces";
import Navbar from "../Navbar";

const Layout: Component<ILayout> = (props) => {
  return (
    <>
      <Navbar active={props.active} />
      {props.children}
    </>
  );
};

export default Layout;
