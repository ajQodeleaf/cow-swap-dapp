"use client";
import { DAppProvider } from "@usedapp/core";
import { config } from "../dapp-config";
import { WalletProvider } from "../context/WalletContext";

export default function RootLayout({ children }) {
  return (
    <WalletProvider>
      <DAppProvider config={config}>
        <html lang="en" style={{ zoom: "67%" }}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style={{
              overflow: "hidden",
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
