import OauthSignUpForm from "@/src/components/auth/oauth/OauthSignUpForm";
import useCheckSignIn from "@/src/hooks/useCheckSignIn";

export default function OauthSignUp() {
  const isLoggedIn = useCheckSignIn();

  return !isLoggedIn && <OauthSignUpForm />;
}
