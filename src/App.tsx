import type { Component } from "solid-js";
import styles from "./App.module.css";
import Home from "./pages/Home";
import { Route, Routes } from "@solidjs/router";
import ProductDescription from "./pages/ProductDescription";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path={"/"} component={Home} />
        <Route path={"/products/:id"} component={ProductDescription} />
        <Route path={"/all-products"} component={AllProducts} />
        <Route path={"/products/category/:cat"} component={CategoryProducts} />
        <Route path={"/cart"} component={Cart} />
      </Routes>
    </div>
  );
};

export default App;
