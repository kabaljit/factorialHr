import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "LoginScreen", {
  title: "Login",
  welcome:
    "Let's make life easy and let's just use this demo account:\ndemo@gmail.com\nP@55word",
  input: {
    email: {
      placeholder: "Email",
      error: {
        required: "Email is required",
        invalid: "Email is not valid",
      },
    },
    password: {
      placeholder: "Password",
      error: {
        required: "Password is required",
        uppercase: "Should contain uppercase",
        lowercase: "Should contain lowercase",
        length: "Too short (minimum 8 chars)",
      },
    },
  },
  button: {
    login: "Login",
  },
});

export function useModuleTranslations() {
  return useTranslation("LoginScreen", { useSuspense: false });
}
