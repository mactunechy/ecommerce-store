"use client";

import { ProductPreviewModal } from "@/components/product-preview-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProductPreviewModal />
    </>
  );
};
