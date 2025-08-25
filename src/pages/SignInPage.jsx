import { SignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useLocation, Navigate } from "react-router-dom";

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  // if user already signed in, send them back
  const from = location.state?.from || "/";

  if (isSignedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="min-h-screen flex items-start justify-center pt-20">
      <SignIn afterSignInUrl={from} afterSignUpUrl={from} />
    </div>
  );
}
