// Layout.js
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.grid}>
      <SideNav fixed className={classes.SideNav} />
      <div className={classes.content}>
        <TopNav />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
    // <AppShell
    //   // padding="md"
    //   navbar={<SideNav />}
    //   header={<TopNav />}
    // >
    //   <Outlet />
    // </AppShell>
  );
};

export default Layout;
