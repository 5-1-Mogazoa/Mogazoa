import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getToken } from "../apis/auth";

const useCheckSignInAuthPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    (async () => {
      if (await getToken()) {
        router.push("/");
        return;
      } else {
        setIsLoggedIn(false);
      }
    })();
  }, []);

  return isLoggedIn;
};

export default useCheckSignInAuthPage;
