import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert(data.message);

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join PrepForge and start tracking your preparation."
    >
      <SignupForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

export default Signup;