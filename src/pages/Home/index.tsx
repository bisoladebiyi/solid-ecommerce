import { Component, createResource, For, Show } from "solid-js";
import Button from "../../components/Elements/Button";
import { fetchItems } from "../../utils/requests";
import ProductList from "../../components/ProductList";
import Layout from "../../components/Layout";
import HeroSection from "../../components/HeroSection";
import { base_url } from "../../utils/constants";
import { A } from "@solidjs/router";

const Home: Component = () => {
  const [cats] = createResource(base_url + "/products/categories", fetchItems);
  const [products] = createResource(
    base_url + "/products?limit=12",
    fetchItems
  );
  return (
    <Layout active="home">
      <HeroSection />
      <main class="mt-20 mx-auto w-11/12">
        <section>
          <Button text="product category" />
          <ul class="grid grid-cols-2 gap-3 md:flex w-full justify-between mt-10 flex-wrap">
            <Show
              when={cats()}
              fallback={
                <p class="text-center text-primary text-lg">Loading...</p>
              }
            >
              <For each={cats()}>
                {(cat) => (
                  <A href={`/products/category/${cat}`}>
                    <li class="uppercase text-deep font-light text-base sm:text-2xl cursor-pointer hover:text-primary transition-colors">
                      {cat}
                    </li>
                  </A>
                )}
              </For>
            </Show>
          </ul>
        </section>
        <ProductList products={products()} />
        <Show when={products()}>
          <A
            href="/all-products"
            class="text-primary block text-center pb-20 -mt-10 text-sm sm:text-base"
          >
            View More
          </A>
        </Show>
      </main>
    </Layout>
  );
};

export default Home;
