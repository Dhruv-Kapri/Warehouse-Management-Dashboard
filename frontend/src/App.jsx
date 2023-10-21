import { Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ReportsPage from "./Pages/ReportsPage";
import SuppliersPage from "./Pages/SuppliersPage";
import OrdersPage from "./Pages/OrdersPage";
import ManageStorePage from "./Pages/ManageStorePage";
import Layout from "./components/Layout/Layout";
import InventoryPage from "./Pages/InventoryPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import { AppShell, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import UserContextProvider from "./components/UserContext";

function App() {
  return (
    <UserContextProvider>
      <MantineProvider>
        {/* <AppShell
        // padding="md"
        // navbar={<SideNav />}
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            Hello
          </Navbar>
        }
        header={<TopNav />}
        // fixed
      > */}
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="suppliers" element={<SuppliersPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="manage-store" element={<ManageStorePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<ProfilePage />} />
            </Route>
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
        {/* </AppShell> */}
      </MantineProvider>
    </UserContextProvider>
  );
}

export default App;
