import Userprofile from "@/src/components/profiles/UserProfile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const userId = router.query.userId;
  useEffect(() => {
    if (localStorage.getItem("userId") === userId) {
      router.push("/mypage");
      return;
    }
    setIsChecked(true);
  }, [router, userId])
  return (
    <>{isChecked && <Userprofile isMe={false} />}</>
  )
}