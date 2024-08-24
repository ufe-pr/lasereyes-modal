import { useLaserEyes } from "@omnisat/lasereyes";
import { useTranslation } from "react-i18next";

import { Dialog } from "./Dialog";
import DialogContent from "./DialogContent";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useSupportedWallets from "@/hooks/useSupportedWallets";
import "@/i18n/setup";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import WalletImage from "./WalletImage";
import { ChevronLeft, ExternalLinkIcon } from "lucide-react";
import { Alert } from "../ui/alert";
import { useState, useCallback } from "react";

export interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({
  onClose,
  open,
}: ConnectModalProps) {
  const { isConnecting, disconnect } = useLaserEyes();
  const { t } = useTranslation("common");
  const { otherWallets, installedWallets } = useSupportedWallets();
  const [selectedWallet, setSelectedWallet] = useState<string | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | undefined>();

  function resetState() {
    setErrorMsg(undefined);
    setSelectedWallet(null);
  }

  const stopConnecting = useCallback(() => {
    if (isConnecting) disconnect();
  }, [disconnect, isConnecting]);

  const onConnectModalCancel = useCallback(() => {
    stopConnecting();
    onClose();
    resetState();
  }, [onClose, disconnect, isConnecting]);

  const handleConnect = useCallback(() => {
    if (selectedWallet) {
      const fn = installedWallets.find(
        (e) => selectedWallet === e.connectorId
      )?.connect;
      fn?.().then((e) => {
        if (e !== undefined) setErrorMsg(e);
        else onClose();
      });
    }
  }, [selectedWallet]);

  return (
    <Dialog
      onClose={onConnectModalCancel}
      open={open}
      titleId={"lwm_connect_dialog"}
    >
      <DialogContent className="lem-relative lem-overflow-hidden">
        <IsConnectingStep
          isConnecting={isConnecting}
          stopConnecting={stopConnecting}
        />
        <CardHeader>
          {errorMsg && (
            <Alert variant={"destructive"} className="lem-mb-4">
              <div>
                {t("modal.error_occurred")}: {errorMsg}
              </div>
            </Alert>
          )}
          <CardTitle>{t("modal.connect_wallet")}</CardTitle>
          <CardDescription className="lem-max-w-md">
            {t("modal.connect_wallet_description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="lem-space-y-6">
          {installedWallets.length > 0 && (
            <div>
              <div>
                <CardTitle className="lem-text-lg">
                  {t("modal.installed_wallets")}
                </CardTitle>
                <CardDescription className="lem-mt-2">
                  {t("modal.installed_wallets_description")}
                </CardDescription>
              </div>
              <ul className="lem-mt-2 lem-gap-4 md:lem-gap-6 lem-grid lem-grid-cols-1 md:lem-grid-cols-3">
                {installedWallets.map((e) => (
                  <li key={e.connectorId}>
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      onClick={() =>
                        setSelectedWallet(() => {
                          if (selectedWallet === e.connectorId) {
                            return null;
                          }
                          return e.connectorId;
                        })
                      }
                      className={cn(
                        "active:lem-bg-primary/20 [&.active]:lem-bg-primary/30 lem-h-fit",
                        "lem-p-4 lem-border-2 lem-border-primary/30 active:lem-border-primary/40 [&.active]:lem-border-primary/60 lem-rounded-2xl lem-flex lem-w-full lem-gap-4",
                        "md:lem-p-8 md:lem-flex-col md:lem-items-center md:lem-justify-center",
                        {
                          active: selectedWallet === e.connectorId,
                        }
                      )}
                    >
                      <WalletImage wallet={e} />
                      <div className="lem-font-semibold">{e.label}</div>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {otherWallets.length > 0 && (
            <div>
              <div>
                <CardTitle className="lem-text-base lem-text-card-foreground/90">
                  {t("modal.other_wallets")}
                </CardTitle>
                <CardDescription className="lem-mt-1 lem-text-sm">
                  {t("modal.other_wallets_description")}
                </CardDescription>
              </div>
              <ul className="lem-mt-2 lem-flex lem-flex-wrap lem-gap-4">
                {otherWallets.map((e) => (
                  <li key={e.connectorId}>
                    <Button
                      variant={"outline"}
                      className="lem-px-3 lem-h-fit hover:lem-underline"
                      asChild
                    >
                      <a
                        href={e.installUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lem-flex lem-gap-4 lem-border-primary/30 active:lem-border-primary/60"
                      >
                        <WalletImage wallet={e} />
                        <div className="lem-font-semibold">{e.label}</div>
                        <ExternalLinkIcon className="lem-ml-2 lem-h-4" />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="lem-justify-center">
          <Button size="lg" className="lem-w-1/2" onClick={handleConnect}>
            {t("modal.connect")}
          </Button>
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
}
function IsConnectingStep({
  isConnecting,
  stopConnecting,
}: {
  isConnecting: boolean;
  stopConnecting: () => void;
}) {
  const { t } = useTranslation("common");
  return (
    <div
      className={cn(
        { "lem-translate-x-full": !isConnecting },
        "lem-duration-300 lem-translate-x-0",
        "lem-absolute lem-w-full lem-h-full lem-z-10",
        "lem-rounded-[inherit] lem-bg-inherit lem-p-[var(--radius)]"
      )}
    >
      {/* Tailwind Loading spinner at the center */}
      <Button
        variant={"outline"}
        className="lem-text-primary/80"
        onClick={() => stopConnecting()}
      >
        <ChevronLeft className="lem-h-6 lem-w-6 lem-inline-block" /> Go back
      </Button>
      <div className="lem-flex lem-flex-col lem-gap-3 md:lem-gap-6 lem-justify-center lem-items-center lem-w-full lem-h-full">
        <svg
          className={cn(
            { "lem-animate-spin": !isConnecting},
            "lem-duration-1000 lem-text-primary",
            "lem-h-8 lem-w-8 sm:lem-h-12 sm:lem-w-12 md:lem-h-16 md:lem-w-16"
          )}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="lem-opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="lem-opacity-75"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            stroke="currentColor"
            strokeWidth="4"
          ></path>
        </svg>
        <div className="lem-text-center">{t("modal.connecting_wallet")}</div>
      </div>
    </div>
  );
}
