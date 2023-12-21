interface LeftRailProps {
  image: string;
}

export function LeftRail({ image }: LeftRailProps) {
  return (
    <div>
      <img src={image} loading="eager" />
    </div>
  );
}
