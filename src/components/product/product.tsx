import { useGetProductsQuery } from "@/store/store-hooks";
import { ProductDetails } from "../product-details/product-details";
import { ProductGraph } from "../product-graph/product-graph";
import { ProductTable } from "../product-table/product-table";
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
    <section className="grid grid-cols-1 gap-4 w-full lg:grid-cols-5">
      <ProductDetails className="lg:col-start-1 lg:row-span-2" />

      <ProductGraph className="lg:col-start-2 lg:col-span-4" />

      <ProductTable className="lg:col-start-2 lg:col-span-4" />
    </section>
  );
}
