import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Navbar;
