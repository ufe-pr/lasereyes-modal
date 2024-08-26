import { WalletInfo } from "lib/hooks/useSupportedWallets";
import { cn } from "../../lib/utils";
// import { WalletIcon } from "@omnisat/lasereyes";

export default function WalletImage({
  wallet: e,
  className,
}: {
  wallet: WalletInfo;
  className?: string;
}) {
  return (
    <>
      {/* <WalletIcon walletName={e.connectorId} size={20} /> */}
      <div
        className={cn(
          "lem-h-4 lem-w-4 md:lem-h-8 md:lem-w-8 lem-relative",
          className
        )}
      >
        <img
          src={e.icon}
          alt={e.connectorId}
          className={cn(
            "lem-absolute lem-top-0 lem-left-0 lem-h-full lem-w-full lem-object-contain",
            {
              "dark:lem-opacity-0": !!e.darkModeIcon,
            }
          )}
        />
        {e.darkModeIcon && (
          <img
            src={e.darkModeIcon}
            alt={e.connectorId}
            className={cn(
              "lem-h-full lem-w-full lem-object-contain lem-opacity-0",
              "dark:lem-opacity-100 lem-absolute lem-top-0 lem-left-0"
            )}
          />
        )}
      </div>
    </>
  );
}
