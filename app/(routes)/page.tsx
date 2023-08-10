import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("598a0146-4341-4b34-b27e-83b97112986a");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
