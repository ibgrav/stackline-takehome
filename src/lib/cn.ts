type ClassName = string | number | boolean | undefined | null;

// I could use a library such as classnames or clsx,
// but my use-case is small and prefer to reduce a production dependency.
export function cn(...classNames: ClassName[]) {
  let result = "";

  classNames.forEach((className) => {
    // this will strip 0, but that is probably fine
    if (className) result += " " + className;
  });

  return result;
}
