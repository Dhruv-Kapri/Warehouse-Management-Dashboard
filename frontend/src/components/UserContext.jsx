import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [activeTab, setActiveTab] = useState("dashboard");

  // Function to handle user logout
  const logout = () => {
    setUserInfo({}); // Clear the user data by setting it to null
  };

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, activeTab, setActiveTab, logout }}
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
