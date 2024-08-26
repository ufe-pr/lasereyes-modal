import { FRACTAL_TESTNET, MAINNET, SIGNET, TESTNET } from "@omnisat/lasereyes";

export type SupportedNetwork = typeof TESTNET | typeof SIGNET | typeof MAINNET | typeof FRACTAL_TESTNET;

export interface LaserEyesModalConfig {
  networks: SupportedNetwork[];
  defaultNetwork?: SupportedNetwork;
  iconUrl?: string;
}