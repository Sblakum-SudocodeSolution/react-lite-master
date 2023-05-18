import { Button, Nav, NavItem } from "reactstrap";
// import Logo from "./Logo";
import { NavLink, useLocation } from "react-router-dom";

// const navigation = [
//   {
//     title: "Dashboard",
//     href: "/dashbord",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Manage User",
//     href: "/manage-user",
//     icon: "bi bi-people",
//   },
//   {
//     title: "Work Queue",
//     href: "/work-queue",
//     icon: "bi bi-patch-check",
//   },
//   {
//     title: "Application",
//     href: "/application",
//     icon: "bi bi-file",
//   },
//   {
//     title: "Profile",
//     href: "/profile",
//     icon: "bi bi-person",
//   },
// ];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        {/* <Logo /> */}
        <h4>Admin</h4>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          <NavItem className="sidenav-bg">
            <NavLink
              className={
                location.pathname === "/dashbord"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
              to="/dashbord"
            >
              <i
                className="bi bi-speedometer2"
                style={{ paddingRight: "1rem" }}
              ></i>
              Dashboard
            </NavLink>
          </NavItem>

          <>
            <NavItem className="sidenav-bg">
              <NavLink
                className={
                  location.pathname === "/manage-user"
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                to="/manage-user"
              >
                <i
                  className="bi bi-people"
                  style={{ paddingRight: "1rem" }}
                ></i>
                Manage User
              </NavLink>
            </NavItem>
            <NavItem className="sidenav-bg">
              <NavLink
                className={
                  location.pathname === "/work-queue"
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                to="/work-queue"
              >
                <i
                  className="bi bi-patch-check"
                  style={{ paddingRight: "1rem" }}
                ></i>
                Work Queue
              </NavLink>
            </NavItem>
          </>

          <NavItem className="sidenav-bg">
            <NavLink
              className={
                location.pathname === "/application"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
              to="/application"
            >
              <i className="bi bi-file" style={{ paddingRight: "1rem" }}></i>
              Application
            </NavLink>
          </NavItem>
          <NavItem className="sidenav-bg">
            <NavLink
              className={
                location.pathname === "/profile"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
              to="/profile"
            >
              <i className="bi bi-person" style={{ paddingRight: "1rem" }}></i>
              Profile
            </NavLink>
          </NavItem>
          {/* {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))} */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
