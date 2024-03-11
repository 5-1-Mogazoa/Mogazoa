import OauthSignUpForm from "@/src/components/auth/oauth/OauthSignUpForm";
import useCheckSignInAuthPage from "@/src/hooks/useCheckSignInAuthPage";

export default function OauthSignUp() {
  const isLoggedIn = useCheckSignInAuthPage();

  return !isLoggedIn && <OauthSignUpForm />;
}
