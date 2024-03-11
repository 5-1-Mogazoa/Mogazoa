import SignUpForm from "@/src/components/auth/signUp/SignUpForm";
import useCheckSignIn from "@/src/hooks/useCheckSignIn";

export default function SingUp() {
  const isLoggedIn = useCheckSignIn();

  return !isLoggedIn && <SignUpForm />;
}
