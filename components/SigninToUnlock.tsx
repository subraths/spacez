import { useAuth } from "@/app/context/AuthContext";
import BaseSurfaceBtn from "./BaseSurfaceBtn";

export default function SigninToUnlock() {
  const auth = useAuth();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-primary-1">Sign in to unlock exclusive additional rewards</h2>
      <BaseSurfaceBtn tittle="Sign In" action={auth.login} />
    </div>
  )
}
