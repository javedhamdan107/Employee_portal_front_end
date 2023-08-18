import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="image">
        <img className="logo" alt="logo" src="/assets/img/kv-logo.png" />
      </div>

      <div className="employee-list">
        <div className="icon-bg">
          <img className="icon" alt="icon" src="/assets/icons/employees.svg" />
        </div>
        <div>
          <span className="employee-text">Employee List</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
