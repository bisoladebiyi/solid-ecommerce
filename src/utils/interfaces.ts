import { JSXElement } from "solid-js";

export type ILayout = {
    active: "home" | "product" | "cat";
    children?: JSXElement
}

export type IButton = {
    text: string;
    secondary?: boolean;
    primary?: boolean;
    class?: string;
    onClick?: () => void
}

export type IHero = {
    text?: string
}
