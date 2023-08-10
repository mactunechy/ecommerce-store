"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { CartItem } from "./components/cart-item";
import { CartSummary } from "./components/cart-summary";
import { ReactNode, useRef } from "react";

interface Props {}

const CartPage: React.FC<Props> = ({}) => {
  const cart = useCart();

  //Hack: remove the z-index on the "Remove button icon"
  const removeCartItemRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">Cart is empty.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <CartSummary removeCartItemRef={removeCartItemRef} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
