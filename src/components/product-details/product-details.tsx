import { Tag } from "@/components/tag/tag";
import { cn } from "@/lib/cn";
import { useTypedSelector } from "@/store/store-hooks";

interface ProductDetailsProps {
  className?: string;
}

// todo: add better handling of missing api data
export function ProductDetails({ className }: ProductDetailsProps) {
  const { data } = useTypedSelector((state) => state.product);

  return (
    <div className={cn("shadow", className)}>
      <div className="border-b p-4 text-center flex flex-col gap-2 items-center justify-center">
        {data.image && <img src={data.image} loading="eager" className="size-32" alt={data.subtitle} />}
        <h2 className="text-xl font-bold">{data.title}</h2>
        <span className="text-sm text-gray-500">{data.subtitle}</span>
      </div>

      {data.tags && (
        <div className="border-b p-4 flex gap-2 flex-wrap">
          {data.tags.map((tag, i) => (
            <Tag key={`${tag}-${i}`} text={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
