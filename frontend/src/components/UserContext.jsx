import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [activeTab, setActiveTab] = useState("dashboard");

  // localStorage.setItem("isLoggedIn", "true");
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Function to handle user logout
  const logout = () => {
    setUserInfo({}); // Clear the user data by setting it to null
    localStorage.setItem("isLoggedIn", "false");
  };

  // localStorage.setItem("isLoggedIn", "true");
  // const isLoggedIn = userInfo !== null;
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        activeTab,
        setActiveTab,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Add PropTypes validation
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
