export const MARKET_FEE_RATE = 0.02;
export const POSITION_TRANSFER_FEE_RATE = 0.01;
export const MIN_STAKE_USDC = 1;
export const MAX_STAKE_USDC = 1_000_000;

export const CONTRACT_DURATIONS = {
  FIFTEEN_MINUTES: 15 * 60,
  ONE_HOUR: 60 * 60,
  FOUR_HOURS: 4 * 60 * 60,
  ONE_DAY: 24 * 60 * 60,
  SEVEN_DAYS: 7 * 24 * 60 * 60,
} as const;
