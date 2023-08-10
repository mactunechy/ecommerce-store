"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Color } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  data: Color[];
  name: string;
  valueKey: string;
}

export const ColorsFilter: React.FC<Props> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    //remove the filter if it already exists in the search params
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mbt-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              variant="outline"
              style={{
                borderColor:
                  selectedValue === filter.id ? filter.value : "#ccc",
              }}
              onClick={() => onClick(filter.id)}
            >
              <div
                className="h-6 w-6 rounded-full border mr-2"
                style={{ backgroundColor: filter.value }}
              />
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
