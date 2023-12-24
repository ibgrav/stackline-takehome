// we want 00-00-00 date format
export function formatDateNum(num: number): string {
  const str = num.toString();

  if (str.length > 2) return str.slice(-2);
  if (str.length < 2) return "0" + str;

  return str;
}
