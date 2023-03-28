import { auth } from "@lib/firebase";

import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/main/navigation/navigation.models";

/**
 *
 *  Sign in with Email & password
 * @returns a callback
 *
 */
export function useSignIn() {
  const mutation2 = useAuthSignInWithEmailAndPassword(auth);

  console.log("[useSignIn] Loading...");

  const navigation = useNavigation<NavigationProp<"Login">>();

  return (email: string, password: string) => {
    /**
     *   Note: Demo user is demo@gmail.com && P@55word
     */
    mutation2.mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: () => navigation.navigate("Home"),
        onError: (error) =>
          console.warn("[useSignIn] Failed to sign in:", error),
      }
    );
  };
}
