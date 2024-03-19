import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getToken } from "../apis/auth";

const useCheckSignIn = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    (async () => {
      if (!(await getToken())) {
        router.push("/");
        return;
      } else {
        setIsLoggedIn(true);
      }
    })();
  }, []);

  return isLoggedIn;
};

export default useCheckSignIn;
