import type { Component } from "solid-js";
import { IButton } from "../../../utils/interfaces";

const Button: Component<IButton> = (props) => {
  return (
    <button
      onClick={props.onClick}
      class={`rounded-sm bg-primary px-4 py-2 capitalize ${props.class}`}
      classList={{
        "bg-opacity-20": props.secondary,
        "text-primary": props.secondary,
        "text-white": !props.secondary,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
