import SignUpForm from "@/src/components/auth/signUp/SignUpForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingUp() {
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

  return !isLoggedIn && <SignUpForm />;
}
