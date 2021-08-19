import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const GarmDisplay = ({
  garm,
  deleteGarm,
  toggleOwn,
  wantedGarms,
  ownedGarms,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="margin10 garmCard">
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="settings"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Add a Need</MenuItem>
              <MenuItem
                onClick={() => {
                  deleteGarm(garm.id);
                  handleClose();
                }}
              >
                Delete Garm
              </MenuItem>
              {garm.own === false ? (
                <MenuItem
                  onClick={() => {
                    toggleOwn(garm.id, garm.own);
                    handleClose();
                  }}
                >
                  Mark as "Owned"
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    toggleOwn(garm.id, garm.own);
                    handleClose();
                  }}
                >
                  Mark as "Wanted"
                </MenuItem>
              )}
            </Menu>
          </>
        }
        title={garm.title}
        subheader={`${garm.brand} - $${garm.cost} (${garm.condition})`}
      ></CardHeader>
      <CardMedia image={garm.img} component="img" className="cardImg" />
      {/* <img
        src={garm.img}
        alt={`${garm.title}, ${garm.brand}, ${garm.condition}`}
        className="cardImg"
      ></img> */}
    </Card>
  );
};

export default GarmDisplay;
