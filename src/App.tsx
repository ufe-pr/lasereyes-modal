// import { LaserEyesProvider } from "@omnisat/lasereyes";
// import ConnectWalletModal from "./components/modal/ConnectModal";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../lib/i18n/setup";
import "./App.css";
import ConnectWalletButton from "@/components/modal/ConnectButton";
import { LaserEyesModalProvider } from "@/providers/LaserEyesModalProvider";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LaserEyesModalProvider>
      <>
        <h1>Hello world</h1>
        <ConnectWalletButton />
      </>
      </LaserEyesModalProvider>
    </I18nextProvider>
  );
}

export default App;
