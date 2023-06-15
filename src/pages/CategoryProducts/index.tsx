import { useParams } from "@solidjs/router";
import { Component, createResource } from "solid-js";
import HeroSection from "../../components/HeroSection";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { base_url } from "../../utils/constants";
import { formatURLString } from "../../utils/helpers";
import { fetchItems } from "../../utils/requests";

const CategoryProducts: Component = () => {
  const params = useParams();
  const [products] = createResource(
    base_url + "/products/category/" + params.cat,
    fetchItems
  );
  return (
    <Layout active="product">
      <HeroSection text={formatURLString(params.cat)} />
      <main class="w-11/12 mx-auto">
        <ProductList products={products()} name={formatURLString(params.cat)} />
      </main>
    </Layout>
  );
};

export default CategoryProducts;
