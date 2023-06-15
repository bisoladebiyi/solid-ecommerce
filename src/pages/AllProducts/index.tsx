import { Component, createResource } from "solid-js";
import HeroSection from "../../components/HeroSection";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { base_url } from "../../utils/constants";
import { fetchItems } from "../../utils/requests";

const AllProducts: Component = () => {
  const [products] = createResource(base_url + "/products", fetchItems);
  return (
    <Layout active="product">
      <HeroSection />
      <main class="w-11/12 mx-auto">
        <ProductList products={products()} />
      </main>
    </Layout>
  );
};

export default AllProducts;
