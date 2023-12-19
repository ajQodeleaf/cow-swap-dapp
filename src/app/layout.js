"use client";
import { DAppProvider } from "@usedapp/core";
import { config } from "../dapp-config";
import { WalletProvider } from "../context/WalletContext";

export default function RootLayout({ children }) {
  return (
    <WalletProvider>
      <DAppProvider config={config}>
        <html lang="en">
          <body
            style={{
              overflow: "hidden",
              transform: "scale(1.0)",
              transformOrigin: "top left",
              marginLeft: "40px",
              marginRight: "40px",
              backgroundImage:
                "linear-gradient(rgb(255, 255, 255),rgb(255, 244, 212))",
            }}
          >
            {children}
          </body>
        </html>
      </DAppProvider>
    </WalletProvider>
  );
}
