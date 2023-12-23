import { Tag } from "@/components/tag/tag";
import { cn } from "@/lib/cn";
import { useProduct } from "@/store/use-product";

interface ProductDetailsProps {
  className?: string;
}

export function ProductDetails({ className }: ProductDetailsProps) {
  const data = useProduct();

  return (
    <div className={cn("shadow", className)}>
      <div className="border-b p-4 text-center flex flex-col gap-2 items-center justify-center">
        <img src={data.image} loading="eager" className="size-32" />
        <h2 className="text-xl font-bold">{data.title}</h2>
        <span className="text-sm text-gray-400">{data.subtitle}</span>
      </div>

      <div className="border-b p-4 flex gap-2 flex-wrap">
        {data.tags?.map((tag, i) => <Tag key={`${tag}-${i}`} text={tag} />)}
      </div>
    </div>
  );
}
