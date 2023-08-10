import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductsPageProps {}

const ProductPageLoader: React.FC<ProductsPageProps> = async () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Skeleton className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-gray-100" />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className=" flex flex-col space-y-2">
                <Skeleton className="font semibold text-lg h-[30px] w-[30vw]" />
                <Skeleton className="text-sm text-gray-500 h-[20px] w-[20vw]" />
                <Skeleton className="text-sm text-gray-500 h-[20px] w-[20vw]" />
              </div>
              <Skeleton className="flex items-center justify-between h-[50px] w-[150px] mt-8 rounded-full " />
            </div>
          </div>

          <Skeleton className="h-10 w-[10vw] mt-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l:grid-cols-4 gap-4 mt-5">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="bg-white group cursor-pointer rounded-xl space-y-4">
                {/* Images and Actions */}
                <Skeleton className="aspect-square rounded-xl relative" />

                {/* Product Description */}
                <div className=" flex flex-col space-y-2">
                  <Skeleton className="font semibold text-lg h-5 w-[200px]" />
                  <Skeleton className="text-sm text-gray-500 h-5 w-[200px]" />
                </div>
                <Skeleton className="flex items-center justify-between h-5 w-20" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPageLoader;
