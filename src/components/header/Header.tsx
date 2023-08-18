import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("Auth");
    navigate("/login");
  };

  return (
    <div className="title">
      <div className="button-wrap">
        <Button text="logout" type="submit" onClick={logout} />
      </div>
    </div>
  );
};

export default Header;
