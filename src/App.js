import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import QrCodePage from "./pages/qr-code";
import EmployeesPage from "./pages/employees";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/qr-code" element={<QrCodePage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
