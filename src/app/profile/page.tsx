"use client";

import { useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PowerBIScopes } from "../../../authConfig";

type group = {
  id: string;
  name: string;
  type: string;
};
const Profile = () => {
  const [status, setStatus] = useState<Partial<group>[]>([]);
  const { instance } = useMsal();
  const accounts = instance.getAllAccounts();

  const datasetId = "f67ba2b8-6c6c-4401-9f43-a3d5c9c03a56";
  const groupId = "7a640972-7e2c-4da3-b56e-2cebb35cb52f";

  const Logout = () => {
    instance.logout();
  };

  useEffect(() => {
    const fetchStatus = async () => {
      if (accounts.length === 0) return;

      try {
        const response = await instance.acquireTokenSilent({
          scopes: PowerBIScopes,
          account: accounts[0],
        });

        const accessToken = response.accessToken;

        const result = await axios.get(
          `https://api.powerbi.com/v1.0/myorg/groups`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const refreshStatus = result.data?.value;
        console.log("Refresh data", refreshStatus);
        setStatus(refreshStatus);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchStatus();
  }, [accounts]);

  if (accounts.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-xl font-bold">
        Welcome to your profile! Latest refresh data:
        {status?.map((item, index) => (
          <div key={index} className="mt-2 text-base font-normal">
            <div>Name: {item.name}</div>
          </div>
        ))}
        <button
          onClick={Logout}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Login First
      </div>
    );
  }
};

export default Profile;
