import { Header } from "@/components/header/header";
import { LeftRail } from "@/components/left-rail/left-rail";
import { useGetProductsQuery } from "@/lib/hooks";

export function App() {
  const res = useGetProductsQuery();

  return (
    <>
      <Header />

      <main>
        <LeftRail image="" />
      </main>

      <pre>{JSON.stringify(res, null, 2)}</pre>
    </>
  );
}
