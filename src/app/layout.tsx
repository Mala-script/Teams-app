'use client';
import { FC, ReactNode } from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import "./globals.css";
import AppInfo from "../../authConfig";

const msalInstance = new PublicClientApplication(AppInfo);

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MsalProvider instance={msalInstance}>
          {children}
        </MsalProvider>
      </body>
    </html>
  );
};

export default Layout;
