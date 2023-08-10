import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {}

const HomePageLoader: React.FC<Props> = ({}) => {
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <Skeleton className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-gray-100" />
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <Skeleton className="h-10 w-[25vw]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l:grid-cols-4 gap-4">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePageLoader;
