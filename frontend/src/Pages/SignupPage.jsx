import { useState } from "react";
import { Navigate } from "react-router-dom";
import baseUrl from "../baseUrl";
import Signup from "../components/LoginSignup/Signup";

const SignupPage = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSignup = async (name, email, password) => {
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successful");
      setRedirect(true);
    } else {
      alert("Registration failed");
    }
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return <Signup onSignup={handleSignup} />;
};

export default SignupPage;
