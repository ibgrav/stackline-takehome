import { useGetProductsQuery } from "@/store/hooks";
import { ProductDetails } from "./product-details/product-details";
import { ProductGraph } from "./product-graph/product-graph";
import { Spinner } from "../spinner/spinner";

export function Product() {
  const { isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className="text-red-500">An error has occured.</div>;
  }

  return (
    <section className="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
      <ProductDetails />

      <ProductGraph />
    </section>
  );
}
