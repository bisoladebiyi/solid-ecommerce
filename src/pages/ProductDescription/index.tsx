import { useParams } from "@solidjs/router";
import { Component, createResource, createSignal, Show } from "solid-js";
import Button from "../../components/Elements/Button";
import Layout from "../../components/Layout";
import { useCartContext } from "../../context/CartContextProvider";
import { fetchItems } from "../../utils/requests";

const ProductDescription: Component = () => {
  const params = useParams();
  const [qty, setQty] = createSignal<number>(1);
  const { cart, setCart }: any = useCartContext();
  const [product] = createResource(
    `https://fakestoreapi.com/products/${params.id}`,
    fetchItems
  );

  const changeQty = (sign: string) => {
    if (qty() === 1 && sign === "-") return;

    if (sign === "-") {
      setQty(qty() - 1);
    } else {
      setQty(qty() + 1);
    }
  };

  const addToCart = () => {
    let prodInCart = cart.filter((item: any) => item.id === product().id)[0];

    if (prodInCart) {
      setCart(
        (prev: { id: any }) => prev.id === product().id,
        "qty",
        prodInCart.qty + 1
      );

      alert("Product added to cart!");
      return;
    }
    setCart([...cart, { ...product(), qty: qty() }]);
    alert("Product added to cart!");
  };

  return (
    <Layout active="product">
      <div class="w-9/12 mx-auto h-[90vh] grid place-items-center mt-20 md:mt-0">
        <Show when={product()} fallback={<p>Loading...</p>}>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-20 pb-20 md:pb-0">
            <figure>
              <img src={product().image} alt="" class="max-h-[40vh]" />
            </figure>
            <div>
              <p class="uppercase text-sm text-gray-500 mb-2">
                {product().category}
              </p>
              <p class="font-semibold text-2xl text-deep mb-3">
                {product().title}
              </p>
              <p>{product().description}</p>
              <div class="flex justify-between items-center mb-5">
                <p class="mt-10 font-bold text-xl text-deep">
                  ${product().price}
                </p>
                <div class="flex space-x-2">
                  <Button
                    text="-"
                    class="text-[12px] py-[0.5px] px-2"
                    onClick={() => changeQty("-")}
                    secondary
                  />
                  <input
                    type="number"
                    min={1}
                    class="w-10 px-2 rounded border text-[12px] border-gray-300"
                    value={qty().toString()}
                    onInput={(e) => setQty(parseInt(e.target.value))}
                  />
                  <Button
                    text="+"
                    class="text-[12px] py-[0.5px] px-2"
                    onClick={() => changeQty("+")}
                    secondary
                  />
                </div>
              </div>
              <Button text="Add to cart" onClick={addToCart} />
            </div>
          </div>
        </Show>
      </div>
    </Layout>
  );
};

export default ProductDescription;
