import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        ☸ CloudOps
      </div>

      <nav>
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/services">⚙️ Services</Link>
        <Link to="/about">ℹ️ About</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
