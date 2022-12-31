import React, { useState } from 'react'
import { AppBar, IconButton, InputBase, Toolbar, Box, Button, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { ArrowDropDownOutlined, DarkModeOutlined, Dehaze, LightModeOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';

import profileImage from "../assets/photo.jpg"

const Navbar = ({user, isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar sx={{
      position: "static",
      background: "none",
      boxShadow: "none"
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
      
      {/* LEFT SIDE: HAMBURGER MENU AND SEARCH BAR */}
      <Box>
        <IconButton  onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Dehaze/>
        </IconButton>
        <Box backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 0.1rem 0.1rem 1rem"
            display={"inline-block"}
            marginLeft="1.5rem">

          <InputBase placeholder='Search'/>

          <IconButton>
            <Search/>
          </IconButton>
        </Box>
      </Box>

      {/* RIGHT SIDE: DARK/LIGHT SELECTOR AND SETTINGS ICON */}
      <Box>
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
        </IconButton>

        <IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>

        <Box>
        <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
        </Box>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar