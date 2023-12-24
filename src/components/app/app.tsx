import { Header } from "@/components/header/header";
import { Product } from "@/components/product/product";

export function App() {
  return (
    <>
      <Header />

      <main className="container pb-4 pt-12 flex justify-center">
        <Product />
      </main>
    </>
  );
}
