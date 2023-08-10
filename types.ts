export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  isFeatured: boolean;
  size: Size;
  color: Color;
  price: string | number;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface CheckoutResponse {
  uuid: string;
  return_url: string;
  cancel_url: string;
}

export interface CheckoutRequest {
  name: string;
  email: string;
  phone?: string;
  address: string;
  productIds: string[];
}

declare global {
  var payfast_do_onsite_payment: (
    options: {
      uuid: string;
      cancel_url?: string;
      return_url?: string;
    },
    callback?: (result: boolean) => void
  ) => void;
}
