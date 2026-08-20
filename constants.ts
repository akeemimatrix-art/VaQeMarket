export const VAQE_VERSION = "0.1.0";
export const PIP_SIZE = 0.0001;
export const PROTOCOL_FEE = 0.02;
export const ORACLE_PROBE_INTERVAL_SECONDS = 30;
export const ORACLE_OUTLIER_SIGMA = 2.5;

export const NODE_WEIGHTS = {
  sentinel: 1,
  validator: 2.5,
  anchor: 5,
} as const;

export const MARKETS = {
  STO: "Cloud & Storage",
  PAY: "Payment Infrastructure",
  AI: "AI Infrastructure",
  INF: "Network / CDN",
  DEV: "Developer Infrastructure",
  CHAIN: "Web3 Infrastructure",
  ADV: "Advertising Infrastructure",
  COM: "Communication Infrastructure",
  SEC: "Security Infrastructure",
  CRE: "Software Creation Infrastructure",
} as const;
