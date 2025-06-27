// import {
//   Configuration,
//   PopupRequest,
//   RedirectRequest,
// } from "@azure/msal-browser";

// const clientId = "01d40b95-7f1c-4b79-86fb-4aab9a56c885";
// const tenantId = "13455409-49d0-4427-a5a8-c7e016bd530c";

// export const msalConfig: Configuration = {
//   auth: {
//     clientId: clientId,
//     authority: `https://login.microsoftonline.com/${tenantId}`,
//     redirectUri: "/",
//   },
//   cache: {
//     cacheLocation: "localStorage",
//     storeAuthStateInCookie: false,
//   },
// };

// export const loginRequest: PopupRequest | RedirectRequest = {
//   scopes: ["User.Read"],
// };

const AppInfo = {
  auth: {
    clientId: "01d40b95-7f1c-4b79-86fb-4aab9a56c885",
    authority: "https://login.microsoftonline.com/analyticsaura.com",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
};

export const LoginScopes = ["openid", "profile", "email", "offline_access"];

export const PowerBIScopes = [
  "https://analysis.windows.net/powerbi/api/.default",
];

export default AppInfo;
