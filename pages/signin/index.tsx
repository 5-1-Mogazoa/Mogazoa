import SignInForm from "@/src/components/auth/signIn/SignInForm";
import OauthSignInBox from "@/src/components/oauth/OauthSignInBox";
import useCheckSignIn from "@/src/hooks/useCheckSignIn";

export default function SignIn() {
  const isLoggedIn = useCheckSignIn();

  return (
    !isLoggedIn && (
      <>
        <SignInForm />
        <OauthSignInBox />
      </>
    )
  );
}
