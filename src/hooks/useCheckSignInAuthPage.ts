import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCheckSignInAuthPage = () => {
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

  return isLoggedIn;
};

export default useCheckSignInAuthPage;
