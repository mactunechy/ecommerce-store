"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import qs from "query-string";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import useCart from "@/hooks/use-cart";
import checkout from "@/actions/checkout";
import { useRouter } from "next/navigation";

interface ShippingDetails {
  name: string;
  email: string;
  phone?: string;
  address: string;
}

const saPhoneNumberRegex = /^\+27[0-9]{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().regex(emailRegex, "Invalid email address format"),
  phone: z
    .string()
    .regex(
      saPhoneNumberRegex,
      "Invalid phone number format. Expected format: '+27XXXXXXXXX'"
    )
    .optional(),
  address: z.string().min(1),
});

interface ShippingFormProps {
  initialData: ShippingDetails;
}

type ShippingFormValues = z.infer<typeof formSchema>;

export const ShippingForm: React.FC<ShippingFormProps> = ({ initialData }) => {
  const items = useCart((state) => state.items);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<ShippingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (values: ShippingFormValues) => {
    try {
      setLoading(true);
      const productIds = items.map((item) => item.id);

      const result = await checkout({
        ...values,
        productIds,
      });
      const url = qs.stringifyUrl(
        {
          url: "/cart/process-payment",
          query: {
            uuid: result.uuid,
          },
        },
        { skipNull: true }
      );

      router.push(url);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your phone"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery address</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="delivery address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full mt-6 rounded-full" disabled={loading}>
            Checkout
          </Button>
        </form>
      </Form>
    </>
  );
};
