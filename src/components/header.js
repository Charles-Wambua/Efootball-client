import { Link } from "react-router-dom";
import "./css/header.css";
import { DisplayUserProfile } from "./userprofile/displayProfile";
export const Header = () => {
  const userId = localStorage.getItem("userId");
  return (
    <div className="header">
      <h2>EFOOTBALL CHAMPIONSHIPS PRO</h2>
     
        {!userId ? (
          <Link to="/user-profile">Create Profile</Link>
        ) : (
          <div className="display-user-profile">
            <DisplayUserProfile />
          </div>
        )}
    
    </div>
  );
};
