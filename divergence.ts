import { Divergence } from "./types";

export function calculateDivergence(stoF: number, stoM: number): Divergence {
  if (stoF <= 0) {
    throw new Error("STO-F must be greater than zero.");
  }

  const absolute = stoM - stoF;
  const percentage = (absolute / stoF) * 100;

  return {
    absolute,
    percentage,
    premium:
      absolute > 0.000001
        ? "PREMIUM"
        : absolute < -0.000001
          ? "DISCOUNT"
          : "PAR",
  };
}
