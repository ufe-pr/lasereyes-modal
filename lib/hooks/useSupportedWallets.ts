import {
  // LEATHER,
  MAGIC_EDEN,
  // OKX,
  // OYL,
  // PHANTOM,
  UNISAT,
  // WIZZ,
  XVERSE,
  useLaserEyes,
} from "@omnisat/lasereyes";
import unisatImg from "../assets/unisat.svg";
import xverseImg from "../assets/xverse.png";
// import oylImg from "../assets/oyl-black.svg";
// import oylWhiteImg from "../assets/oyl-white.svg";
import { useMemo } from "react";

export interface WalletInfo {
  label: string;
  icon: string;
  darkModeIcon?: string;
  connectorId: typeof UNISAT | typeof XVERSE | typeof MAGIC_EDEN;
  /*| typeof OYL
    | typeof OKX
    | typeof WIZZ
    | typeof LEATHER
    | typeof PHANTOM*/
  installUrl: string;
}

const ALL_SUPPORTED_WALLETS: WalletInfo[] = [
  {
    label: "Unisat",
    icon: unisatImg,
    connectorId: UNISAT,
    installUrl: "https://unisat.io/download",
  },
  {
    label: "XVerse",
    icon: xverseImg,
    connectorId: XVERSE,
    installUrl: "https://www.xverse.app/download",
  },
  // {
  //   label: "OYL",
  //   icon: oylImg,
  //   connectorId: OYL,
  //   darkModeIcon: oylWhiteImg,
  //   installUrl: "https://www.oyl.io/#get-wallet",
  // },
];

export default function useSupportedWallets() {
  const {
    hasUnisat,
    hasLeather,
    hasMagicEden,
    hasOkx,
    hasOyl,
    hasPhantom,
    hasWizz,
    hasXverse,
    connect: connectLaserEyes,
  } = useLaserEyes();
  const [installedWallets, otherWallets] = useMemo(() => {
    const i: (WalletInfo & {
      connect: () => Promise<string | undefined>;
    })[] = [];
    const o: WalletInfo[] = [];
    ALL_SUPPORTED_WALLETS.forEach((w) => {
      const isInstalled = (() => {
        switch (w.connectorId) {
          case UNISAT:
            return hasUnisat;
          case XVERSE:
            return hasXverse;
          // case OYL:
          //   return hasOyl;
          // case OKX:
          //   return hasOkx;
          // case MAGIC_EDEN:
          //   return hasMagicEden;
          // case WIZZ:
          //   return hasWizz;
          // case LEATHER:
          //   return hasLeather;
          // case PHANTOM:
          //   return hasPhantom;
          default:
            return false;
        }
      })();
      if (isInstalled) {
        i.push({
          ...w,
          connect: async () => {
            try {
              await connectLaserEyes(w.connectorId);
            } catch (e) {
              console.error(e);
              if (e instanceof Error) {
                return e.message;
              } else if ("message" in (e as any)) {
                return `${(e as any).message}`;
              }
              return `${e}`;
            }
          },
        });
      } else {
        o.push(w);
      }
    });
    return [i, o];
  }, [
    hasLeather,
    hasMagicEden,
    hasOkx,
    hasOyl,
    hasPhantom,
    hasWizz,
    hasXverse,
    hasUnisat,
  ]);
  return { installedWallets, otherWallets };
}
