// Layout.js
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.grid}>
      <SideNav className={classes.SideNav} />
      <div className={classes.content}>
        <TopNav />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
