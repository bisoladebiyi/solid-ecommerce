import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import { useCartContext } from "../../context/CartContextProvider";
import { ILayout } from "../../utils/interfaces";

import "./Navbar.css";

const Navbar: Component<ILayout> = (props) => {
  const { cart }: any = useCartContext();

  const getTotalCartItems = () => {
    const total = cart.reduce(
      (acc: number, current: any) => acc + current.qty,
      0
    );
    return total;
  };

  return (
    <nav class="shadow">
      <div class="flex justify-between w-11/12 py-4 items-center text-deep mx-auto">
        <A href="/">
          <p class="text-sm sm:text-base">Abby Merch</p>
        </A>
        <ul class="flex space-x-7 text-[12px] sm:text-sm items-center links">
          <A href="/">
            <li
              class="hover:text-primary transition-colors"
              classList={{ "text-primary": props.active == "home" }}
            >
              Home
            </li>
          </A>
          <A href="/all-products">
            <li
              class="hover:text-primary transition-colors"
              classList={{ "text-primary": props.active == "product" }}
            >
              Product
            </li>
          </A>
        </ul>
        <A href="/cart">
          <div class="relative">
            <span class="material-symbols-outlined text-deep">
              shopping_bag
            </span>
            <span class="absolute text-[13px] text-white w-5 h-5 rounded-full bg-primary grid place-items-center top-[-3px] right-[-10px]">
              {getTotalCartItems()}
            </span>
          </div>
        </A>
      </div>
    </nav>
  );
};

export default Navbar;
