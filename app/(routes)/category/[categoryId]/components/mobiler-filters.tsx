"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { SizesFilter } from "./sizes-filter";
import { ColorsFilter } from "./colors-filter";

interface Props {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilters: React.FC<Props> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden mb-6 rounded-full"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position  */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button  */}
            <div className="flex items-center justify-end px-4">
              <Button size="icon" variant="outline" onClick={onClose}>
                <X size={15} />
              </Button>
            </div>
            {/* Render the filters */}
            <div className="p-4 flex flex-col space-y-8">
              <SizesFilter valueKey="sizeId" name="Sizes" data={sizes} />
              <ColorsFilter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
