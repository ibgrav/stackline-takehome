import { Header } from "@/components/header/header";
import { Product } from "../product/product";

export function App() {
  return (
    <>
      <Header />

      <main className="px-4 pb-4 pt-12 flex justify-center">
        <Product />
      </main>
    </>
  );
}
