import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import classes from "./SideNav.module.css";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconBellRinging },
  { link: "/inventory", label: "Inventory", icon: IconReceipt2 },
  { link: "/reports", label: "Reports", icon: IconFingerprint },
  { link: "/suppliers", label: "Suppliers", icon: IconKey },
  { link: "/orders", label: "Orders", icon: IconDatabaseImport },
  { link: "/manage-store", label: "Manage Store", icon: Icon2fa },
];

const SideNav = () => {
  const navigate = useNavigate();
  const { userInfo, logout, activeTab, setActiveTab } = useContext(UserContext);

  const isLoggedIn = userInfo !== null;

  // Function to handle logout
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the login page after logging out
  };

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === activeTab || undefined}
      to={item.link} // Use "to" prop for specifying the link
      key={item.label}
      onClick={() => setActiveTab(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <Link to="/settings" className={classes.link}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </Link>

        {isLoggedIn ? (
          <a href="/" className={classes.link} onClick={handleLogout}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        ) : (
          <Link to="/login" className={classes.link}>
            <IconKey className={classes.linkIcon} stroke={1.5} />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default SideNav;
