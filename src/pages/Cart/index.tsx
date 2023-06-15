import { A } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import Button from "../../components/Elements/Button";
import Layout from "../../components/Layout";
import { useCartContext } from "../../context/CartContextProvider";

const Cart: Component = () => {
  const { cart, setCart }: any = useCartContext();

  const getTotalPrice = () => {
    let total = cart.reduce(
      (acc: number, current: { qty: number; price: number }) =>
        acc + current.qty * current.price,
      0
    );
    return total;
  };

  const changeQty = (sign: string, id: string) => {
    let prodInCart = cart.filter((item: any) => item.id === id)[0];

    if (sign === "-" && prodInCart.qty === 1) {
      setCart((p: any[]) => p.filter((p: { id: string }) => p.id !== id));
      alert("Item deleted from cart!");
      return;
    }

    if (sign === "+") {
      setCart((prev: { id: any }) => prev.id === id, "qty", prodInCart.qty + 1);
    } else {
      setCart((prev: { id: any }) => prev.id === id, "qty", prodInCart.qty - 1);
    }
  };

  const removeFromCart = (id: string) => {
    setCart((p: any[]) => p.filter((p: { id: string }) => p.id !== id));
    alert("Item deleted from cart!");
  };

  return (
    <Layout active="product">
      <div class="grid place-items-center h-[90vh] mx-auto">
        <div class="w-11/12 md:w-9/12">
          <h1 class="text-left text-deep font-semibold text-3xl mb-10">
            Cart Summary
          </h1>
          <div class="shadow py-20 px-10 lg:px-40 space-y-20 max-h-[60vh] overflow-auto mb-10">
            <Show
              when={cart[0]}
              fallback={
                <p class="text-center">
                  Your cart is empty 🙁{" "}
                  <A href="/" class="text-primary underline ml-2">
                    Back to shop
                  </A>
                </p>
              }
            >
              <For each={cart}>
                {(cartItem) => (
                  <div class="flex justify-between relative">
                    <Button
                      text="x"
                      class="px-0 py-0 w-5 h-5 rounded-full text-[12px] absolute right-[-20px] top-[-10px]"
                      onClick={() => removeFromCart(cartItem.id)}
                    />
                    <figure class="w-[40%] lg:w-60">
                      <img src={cartItem.image} class="w-full " alt="" />
                    </figure>
                    <div class="w-[50%] lg:w-1/2">
                      <p class="text-deep text-base md:text-xl font-normal mb-5">
                        {cartItem.title}
                      </p>
                      <div class="lg:flex justify-between items-center space-y-2">
                        <div class="flex space-x-2">
                          <Button
                            text="-"
                            class="text-[12px] py-[0.5px] px-2"
                            onClick={() => changeQty("-", cartItem.id)}
                            secondary
                          />
                          <p>{cartItem.qty}</p>
                          <Button
                            text="+"
                            class="text-[10px] md:text-[12px] py-[0.5px] px-2"
                            onClick={() => changeQty("+", cartItem.id)}
                            secondary
                          />
                        </div>
                        <p class="text-base md:text-xl text-deep">
                          ${cartItem.price * cartItem.qty}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </Show>
          </div>
          <p class="text-center text-3xl font-semibold text-deep">
            Total: ${getTotalPrice()}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
