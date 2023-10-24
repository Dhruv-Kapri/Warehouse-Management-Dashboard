import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import InventoryPage from "./Pages/InventoryPage";
import LoginPage from "./Pages/LoginPage";
import ManageStorePage from "./Pages/ManageStorePage";
import NotFoundPage from "./Pages/NotFoundPage";
import OrdersPage from "./Pages/OrdersPage";
import ProfilePage from "./Pages/ProfilePage";
import ReportsPage from "./Pages/ReportsPage";
import SignupPage from "./Pages/SignupPage";
import SuppliersPage from "./Pages/SuppliersPage";
import Layout from "./components/Layout/Layout";
import ServerDownPage from "./Pages/ServerDownPage";

function App() {
  return (
    <Routes>
      <Route path="/" errorElement={<ServerDownPage />}>
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
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
