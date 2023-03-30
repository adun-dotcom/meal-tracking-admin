import { PowerSettingsNew } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import CompanyLogo from "../assets/logo.svg";
import DashboardIcon from "../assets/dashboard-icon.svg";
import DashboardIconActive from "../assets/dashboard-icon-active.svg";
import QrCodeIcon from "../assets/qrcode-icon.svg";
import QrCodeIconActive from "../assets/qrcode-icon-active.svg";
import OrdersIcon from "../assets/order-icon.svg";
import OrdersIconActive from "../assets/order-icon-active.svg";
import EmployeeIcon from "../assets/employee.svg";
import EmployeeIconActive from "../assets/employee-active.svg";
import MealBankIcon from "../assets/meal-bank.svg";
import MealBankIconActive from "../assets/meal-bank-active.svg";
import MaleAvatar from "../assets/male-avatar.svg";
import BusyOverlay from "../Components/BusyOverlay";
export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    link: "/",
  },
  {
    name: "QR Code",
    icon: QrCodeIcon,
    activeIcon: QrCodeIconActive,
    link: "/qr-code",
  },
  {
    name: "Orders",
    icon: OrdersIcon,
    activeIcon: OrdersIconActive,
    link: "/orders",
  },
  {
    name: "Employees",
    icon: EmployeeIcon,
    activeIcon: EmployeeIconActive,
    link: "/employees",
  },
  {
    name: "Meal Bank",
    icon: MealBankIcon,
    activeIcon: MealBankIconActive,
    link: "/meal-bank",
  },
];

const LogoutModal = ({
  show,
  warningMessage,
  handleCancel,
  handleDelete,
  deleteText,
}) => {
  return (
    <div className={`delete-overlay ${show && "delete-overlay--show"}`}>
      <div
        className={`delete-overlay__content ${
          show && "delete-overlay__content--show"
        }`}
      >
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.351 6.493c-.08-.801.55-1.493 1.351-1.493s1.431.692 1.351 1.493l-.801 8.01c-.029.282-.266.497-.55.497s-.521-.215-.55-.498l-.801-8.009zm1.351 12.757c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
          </svg>
        </figure>
        <h2>Are you sure?</h2>
        <p>{warningMessage || "You will not be able to recover this data"}</p>

        <div className="delete-overlay__buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleDelete}>{deleteText || "Delete"}</button>
        </div>
      </div>
    </div>
  );
};

const Wrapper = ({ children, topbarTitle, activeLink }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setOpenModal(false);
  };

  const handleMenu = () => {
    setOpen((p) => !p);
    setTimeout(() => {
      setHamburger((p) => !p);
    }, 100);
  };

  const handleCloseMenu = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setHamburger(false);
      }, 100);
    }
  };

  useEffect(() => {
    const sidebarLink = sidebarLinks.find((s) =>
      activeLink ? pathname === activeLink : pathname === s.link
    );
    setTitle(topbarTitle || sidebarLink.name);
  }, [pathname, topbarTitle, activeLink]);

  const isLoading = loading;

  return (
    <>
      <LogoutModal
        show={openModal}
        handleCancel={() => setOpenModal(false)}
        handleDelete={handleLogout}
        warningMessage={"You might have unsaved changes"}
        deleteText={"Log Out"}
      />
      <BusyOverlay loading={isLoading} />
      <main className="dashboard__wrapper">
        <header className={`${open ? "open" : ""}`}>
          <div className="header__wrap">
            <div
              onClick={handleMenu}
              className={`header__hamburger ${hamburger ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header__title">
              <h1>{title}</h1>
            </div>
            <div className="header__avatar">
              <Avatar
                sx={{ width: "35px", height: "35px" }}
                src={MaleAvatar}
                alt={""}
                className="user-avatar"
              >
                A
              </Avatar>
              <IconButton
                id="logout"
                size="small"
                className="text-danger"
                color="inherit"
                onClick={() => setOpenModal(true)}
                sx={{
                  transform: "scale(2)",
                }}
              >
                <PowerSettingsNew />
              </IconButton>
            </div>
          </div>
        </header>
        <aside id="dashboard__sidebar" className={`${open ? "open" : ""}`}>
          <div className="sidebar__wrap">
            <div className="sidebar__header">
              <img
                onClick={() => navigate("/")}
                className="img-fluid"
                src={CompanyLogo}
                alt="logo"
              />

              <div
                onClick={handleMenu}
                className={`sidebar__hamburger ${hamburger ? "open" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="sidebar__links">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  to={{
                    pathname: link.link,
                  }}
                  className={`sidebar__link ${
                    pathname === link.link ? "active" : ""
                  }`}
                >
                  <img
                    src={pathname === link.link ? link.activeIcon : link.icon}
                    alt={link.name}
                  />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <div
          onClick={() => window.innerWidth <= 768 && handleCloseMenu()}
          className={`dashboard__wrapper__container${hamburger ? " open" : ""}`}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default Wrapper;
