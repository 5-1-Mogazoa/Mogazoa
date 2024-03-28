import Userprofile from "@/src/components/profiles/UserProfile";
import useCheckSignIn from "@/src/hooks/useCheckSIgnin";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const isLoggedIn = useCheckSignIn();
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    const userIdData = Number(localStorage.getItem("userId"));
    setUserId(userIdData);
  }, []);

  return isLoggedIn && userId && <Userprofile userId={userId} isMe={true} />;
}
