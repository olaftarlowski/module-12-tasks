import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "../styled-components/styled-components";

const Navbar = () => {
  let activeClassName = "activeLink";
  return (
    <NavbarWrapper>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Users
      </NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
