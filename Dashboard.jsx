import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function RestaurantDashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="restaurant-dashboard-button"
        aria-controls={open ? 'restaurant-dashboard-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<RestaurantMenuIcon />}
      >
        Restaurant Dashboard
      </Button>
      <Menu
        id="restaurant-dashboard-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'restaurant-dashboard-button',
        }}
      >
        <MenuItem onClick={handleClose}>Menu</MenuItem>
        <MenuItem onClick={handleClose}>Orders</MenuItem>
        <MenuItem onClick={handleClose}>Reservations</MenuItem>
        <MenuItem onClick={handleClose}>Reviews</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>
    </div>
  );
}
