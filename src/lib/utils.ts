import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function nFormatter(num: number, digits: number = 2, noDec: boolean = true) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const item = lookup.findLast((item) => num >= item.value);
  return Math.abs(num) > 0
    ? (Math.sign(num) * (Math.abs(num) / item?.value!)).toFixed(
        Math.abs(num) < 999 && noDec ? 0 : digits
      ) + item?.symbol
    : "0";
}

export { cn, nFormatter };
