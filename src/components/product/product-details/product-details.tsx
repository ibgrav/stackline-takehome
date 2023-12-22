import { Tag } from "@/components/tag/tag";
import { useProduct } from "@/store/use-product";

export function ProductDetails() {
  const data = useProduct();

  console.log("data", data);

  return (
    <div className="shadow">
      <div className="border-b p-4 text-center flex flex-col gap-2 items-center justify-center">
        <img src={data.image} loading="eager" className="size-32" />
        <h2 className="text-xl font-bold">{data.title}</h2>
        <span>{data.subtitle}</span>
      </div>

      <div className="border-b p-4 flex gap-2 flex-wrap">
        {data.tags?.map((tag, i) => <Tag key={`${tag}-${i}`} text={tag} />)}
      </div>
    </div>
  );
}
