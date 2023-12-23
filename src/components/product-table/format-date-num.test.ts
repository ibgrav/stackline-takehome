import { expect, test } from "vitest";
import { formatDateNum } from "./format-date-num";

test("collect sales data", () => {
  const short = formatDateNum(1);
  expect(short).toBe("01");

  const mid = formatDateNum(11);
  expect(mid).toBe("11");

  const long = formatDateNum(10017);
  expect(long).toBe("17");
});
