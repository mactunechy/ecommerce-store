"use client";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { ShippingForm } from "./shipping-form";

interface Props {
  removeCartItemRef: React.Ref<HTMLButtonElement>;
}

export const CartSummary: React.FC<Props> = ({ removeCartItemRef }) => {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce(
    (total, current) => total + Number(current.price),
    0
  );

  if (items.length === 0) return null;

  return (
    <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h1 className="text-lg font-medium text-gray-900"> Order Summary</h1>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>

      <div className=" border-t mt-8">
        <h1 className="text-lg my-8 font-medium text-gray-900">
          Shipping Details
        </h1>

        <ShippingForm
          initialData={{
            name: "",
            email: "",
            address: "",
            phone: "",
          }}
        />
      </div>
    </div>
  );
};
