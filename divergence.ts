export function divergence(stoF: number, stoM: number): number {
  if (stoF === 0) return 0;
  return ((stoM - stoF) / stoF) * 100;
}
