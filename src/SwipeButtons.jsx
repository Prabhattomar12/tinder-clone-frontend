import React from "react";
import "./swipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton left">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton star">
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton right">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
