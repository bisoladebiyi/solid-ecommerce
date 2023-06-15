import type { Component } from "solid-js";
import banner from "../../assets/orangebg.jpg";
import { IHero } from "../../utils/interfaces";

const HeroSection: Component<IHero> = (props) => {
  return (
    <header>
      <div
        style={{
          background: `url(${banner})`,
          "background-size": "cover",
        }}
        class="w-full h-[50vh] banner grid place-items-center"
      >
        <div class="w-11/12">
          <h1 class="font-black text-white text-3xl sm:text-4xl md:text-7xl capitalize">
            {props.text || "Quick Shop!"}
          </h1>
          <p class="font-medium text-white text-base sm:text-xl md:text-2xl mt-2">
            All you need at your finger tips.
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
