import Userprofile from "@/src/components/profiles/UserProfile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@/src/routes";

export default function Profile() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const userId = router.query.userId;
  useEffect(() => {
    if (localStorage.getItem("userId") === userId) {
      router.push(PAGE_ROUTES.MY_PAGE);
      return;
    }
    setIsChecked(true);
  }, [router, userId]);
  return <>{isChecked && userId && <Userprofile userId={Number(userId)} isMe={false} />}</>;
}
