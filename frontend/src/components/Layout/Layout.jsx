// Layout.js
import { AppShell } from "@mantine/core";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import { UserContext } from "../UserContext";
import classes from "./Layout.module.css";

const Layout = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? (
        <div className={classes.grid}>
          <SideNav fixed className={classes.SideNav} />
          <div className={classes.content}>
            <TopNav />
            <div className={classes.outlet}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        // <AppShell
        //     // padding="md"
        //     navbar={<SideNav />}
        //     header={<TopNav />}
        //   >
        //     <Outlet />
        //   </AppShell>

        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Layout;
