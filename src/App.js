import "./App.css";
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import QrCodePage from "./pages/qr-code";
import EmployeesPage from "./pages/employees";
import { QueryClient, QueryClientProvider } from "react-query";
// @ts-ignore
import { NotificationContainer } from "react-notifications";

function App() {
  const accessToken = localStorage.getItem("token");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            exact
            path="/dashboard"
            element={
              !!accessToken ? <DashboardPage /> : <Navigate to="/login" />
            }
          />
          <Route
            exact
            path="/employees"
            element={
              !!accessToken ? <EmployeesPage /> : <Navigate to="/login" />
            }
          />
          <Route
            exact
            path="/qr-code"
            element={!!accessToken ? <QrCodePage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Fragment>
      <NotificationContainer />

      <NotificationContainer />
    </QueryClientProvider>
  );
}

export default App;
