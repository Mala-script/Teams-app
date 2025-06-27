"use client";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { LoginScopes} from "../../authConfig";
import Profile from "./profile/page";

export default function Home() {
  const { instance } = useMsal();

  const handleLogin = () => {
    // instance.loginRedirect({ scopes: Scopes });
    instance.loginPopup({ scopes: LoginScopes});
  };

  return (
    <>
      <AuthenticatedTemplate>
        <Profile />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="flex flex-col items-center justify-center min-h-screen text-xl font-bold">
          <p>Please sign-in to see your profile information.</p>
          <button
            onClick={handleLogin}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign in
          </button>
        </div>
      </UnauthenticatedTemplate>
    </>
  );
}
