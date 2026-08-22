/// <reference path="./node-crypto.d.ts" />
import { createHash } from "node:crypto";
import type { TelemetrySample } from "./types";
export type Commitment = { nodeId: string; hash: string; committedAtMs: number };
export function createCommitment(sample: TelemetrySample, committedAtMs=Date.now()): Commitment { return { nodeId: sample.nodeId, hash: hashSample(sample), committedAtMs }; }
export function verifyReveal(c: Commitment, sample: TelemetrySample): boolean { return c.nodeId===sample.nodeId && c.hash===hashSample(sample); }
function hashSample(s: TelemetrySample) { return createHash("sha256").update(JSON.stringify({nodeId:s.nodeId,role:s.role,timestampMs:s.timestampMs,latencyMs:s.latencyMs,uptimePercent:s.uptimePercent,errorRatePercent:s.errorRatePercent,nonce:s.nonce})).digest("hex"); }
