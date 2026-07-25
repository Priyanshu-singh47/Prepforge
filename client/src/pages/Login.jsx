import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
    });

    // TODO: Login API

    navigate("/");
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your preparation journey."
    >
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

export default Login;