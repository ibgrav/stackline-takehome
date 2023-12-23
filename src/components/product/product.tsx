import { Suspense, lazy } from "react";
import { useGetProductsQuery } from "@/store/store-hooks";
import { ProductDetails } from "../product-details/product-details";
import { Spinner } from "../spinner/spinner";

const ProductGraph = lazy(() => import("../product-graph/product-graph").then((m) => ({ default: m.ProductGraph })));
const ProductTable = lazy(() => import("../product-table/product-table").then((m) => ({ default: m.ProductTable })));

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

      <Suspense>
        <ProductGraph className="lg:col-start-2 lg:col-span-4" />
      </Suspense>
      <Suspense>
        <ProductTable className="lg:col-start-2 lg:col-span-4" />
      </Suspense>
    </section>
  );
}
