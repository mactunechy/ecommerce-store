import { CheckoutRequest, CheckoutResponse } from "@/types";

const URL_ = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

const checkout = async (data: CheckoutRequest): Promise<CheckoutResponse> => {
  const res = await fetch(URL_, {
    method: "POST",
    // headers,
    body: JSON.stringify(data),
  });

  return res.json();
};

export default checkout;
