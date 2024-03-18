import Userprofile from "@/src/components/profiles/UserProfile";
import useCheckSignIn from "@/src/hooks/useCheckSIgnin";

export default function MyProfile() {
  const isLoggedIn = useCheckSignIn();

  return isLoggedIn && <Userprofile isMe={true} />;
}
