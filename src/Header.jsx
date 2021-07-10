import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://th.bing.com/th/id/OIP.owBoTROPHPjbo9EBV3Wx9gHaEz?w=275&h=180&c=7&o=5&dpr=1.38&pid=1.7"
        alt="tinder-logo"
      />

      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}
export default Header;
