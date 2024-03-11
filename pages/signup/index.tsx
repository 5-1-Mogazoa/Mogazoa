import SignUpForm from "@/src/components/auth/signUp/SignUpForm";
import useCheckSignInAuthPage from "@/src/hooks/useCheckSignInAuthPage";

export default function SingUp() {
  const isLoggedIn = useCheckSignInAuthPage();

  return !isLoggedIn && <SignUpForm />;
}
