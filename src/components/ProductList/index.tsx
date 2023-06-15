import { A } from "@solidjs/router";
import { Component, For } from "solid-js";
import { paragraphShortner } from "../../utils/helpers";
import Button from "../Elements/Button";

const ProductList: Component<any> = (props) => {
  return (
    <section class="pb-20">
      <h2 class="text-2xl sm:text-5xl font-medium uppercase text-center mt-10 mb-6 sm:my-20">
        {props.name || "All Products"}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <For each={props.products}>
          {({ image, category, description, price, title, id }) => (
            <A href={`/products/${id}`}>
              <div class="shadow p-5 cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <figure class="w-full">
                    <img
                      class="h-40 w-full object-contain object-center"
                      src={image}
                      alt=""
                    />
                  </figure>
                  <p class="text-xs text-gray-400 mt-2 uppercase">{category}</p>
                  <p class="my-3 text-deep font-normal text-lg">{title}</p>
                  <p
                    class="text-sm font-light"
                    style={{ "line-break": "anywhere" }}
                  >
                    {paragraphShortner(description)}...
                  </p>
                </div>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-xl font-semibold text-deep">${price}</p>
                  <Button text="View" secondary class="text-[13px] py-1" />
                </div>
              </div>
            </A>
          )}
        </For>
      </div>
    </section>
  );
};

export default ProductList;
