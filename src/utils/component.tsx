"use client";
import React, { FC, ReactNode } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  MsalProvider,
} from "@azure/msal-react";
import AppInfo from "../../authConfig";


const msalInstance = new PublicClientApplication(AppInfo);

const Component: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
};

export default Component;
