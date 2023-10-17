import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import baseUrl from "../baseUrl";
import Login from "../components/LoginSignup/Login";

const LoginPage = () => {
  const { setUserInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert(`An error occurred. Please try again.Error: ${error}`);
    }
  };

  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
