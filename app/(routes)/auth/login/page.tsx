import { LoginContainer, LogoComponent } from "@/modules/auth/login/ui"

export default function Login() {
  return (
    <div className="grid grid-cols-12 ">
      <LogoComponent />
      <LoginContainer />
    </div>
  )
}
