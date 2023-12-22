import { Header } from "@/components/header/header";
import { Product } from "../product/product";

export function App() {
  return (
    <>
      <Header />

      <main className="container pb-4 pt-12 flex items-center justify-center">
        <Product />
      </main>
    </>
  );
}
