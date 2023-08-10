"use client";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface Props {}

const ProcessPaymentPage: React.FC<Props> = () => {
  const removeAll = useCart((state) => state.removeAll);
  const [success, setSuccess] = useState<boolean | null | undefined>(undefined);

  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid") as string;

  useEffect(() => {
    window.payfast_do_onsite_payment(
      {
        uuid,
      },
      (success: boolean) => {
        setSuccess(success);
        if (success) {
          toast.success("Payment complete. Shipping in progress.");
          removeAll();
        } else {
          toast.error("Something went wrong whilst processing your payment.");
        }
      }
    );
  }, [uuid]);

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-gray-500 md:text-xl">
          {success === undefined
            ? "Please wait..."
            : success === null
            ? "Something went wrong"
            : null}
        </h3>
        <div>
          {success !== undefined && (
            <div className="mt-5">
              <Link
                href="/"
                className="text-sm text-primary text-bold underline"
              >
                Continue shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessPaymentPage;
