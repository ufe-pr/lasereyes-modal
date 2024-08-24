import ConnectWalletModal from "@/components/modal/ConnectModal";
import { LaserEyesModalConfig } from "@/types/config";
import {
  FRACTAL_TESTNET,
  LaserEyesProvider,
  MAINNET,
  SIGNET,
  TESTNET,
  useLaserEyes,
} from "@omnisat/lasereyes";
import { FC, ReactNode, createContext, useCallback, useContext, useState } from "react";

export interface LaserEyesContext {
  isOpen: boolean;
  isLoading: boolean;
  showModal: () => void;
  hideModal: () => void;
  config: LaserEyesModalConfig;
  setConfig: (config: LaserEyesModalConfig) => void;
}

export const laserEyesModalContext = createContext<LaserEyesContext>({
  isOpen: false,
  isLoading: false,
  showModal: () => {},
  hideModal: () => {},
  config: {
    networks: [MAINNET, TESTNET, SIGNET, FRACTAL_TESTNET],
    defaultNetwork: "mainnet",
  },
  setConfig: () => {},
});

export const useLaserEyesModal = (): LaserEyesContext => {
  return useContext(laserEyesModalContext);
};

export const LaserEyesModalProvider: FC<{
  children: ReactNode | ReactNode[];
  config?: LaserEyesModalConfig;
}> = ({ children, config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setConfig] = useState<LaserEyesModalConfig>(
    config || {
      networks: [MAINNET, TESTNET, SIGNET],
      defaultNetwork: MAINNET,
    }
  );
  const { isConnecting, connected } = useLaserEyes();
  const isLoading = isOpen || isConnecting;

  const showModal = useCallback(() => {
    if (!connected) setIsOpen(true);
  }, [connected, isOpen]);
  const hideModal = useCallback(() => setIsOpen(false), []);

  return (
    <LaserEyesProvider
      config={{
        network: modalConfig.defaultNetwork ?? "mainnet",
      }}
    >
      <laserEyesModalContext.Provider
        value={{
          isOpen,
          isLoading,
          showModal,
          hideModal,
          config: modalConfig,
          setConfig,
        }}
      >
        {children}
        <ConnectWalletModal
          onClose={() => setIsOpen(false)}
          open={isOpen && !connected}
        />
      </laserEyesModalContext.Provider>
    </LaserEyesProvider>
  );
};
