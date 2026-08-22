export type OracleHealth = {
  validNodeRatio: number;
  disagreement: number;
};

export function oracleMaySettle(health: OracleHealth): boolean {
  // Settlement requires >= 66% valid node participation and
  // disagreement below the configured tolerance.
  return health.validNodeRatio >= 0.66 && health.disagreement <= 0.05;
}
