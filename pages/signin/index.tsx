import SignInForm from "@/src/components/auth/signIn/SignInForm";
import OauthSignInBox from "@/src/components/oauth/OauthSignInBox";
import useCheckSignInAuthPage from "@/src/hooks/useCheckSignInAuthPage";

export default function SignIn() {
  const isLoggedIn = useCheckSignInAuthPage();

  return (
    !isLoggedIn && (
      <>
        <SignInForm />
        <OauthSignInBox />
      </>
    )
  );
}
