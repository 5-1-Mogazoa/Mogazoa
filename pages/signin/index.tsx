import SignInForm from "@/src/components/auth/signIn/SignInForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/");
      return;
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return !isLoggedIn && <SignInForm />;
}
