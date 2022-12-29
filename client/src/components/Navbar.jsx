import React from 'react'
import { AppBar, IconButton, InputBase, Toolbar, Box } from '@mui/material';
import { DarkModeOutlined, Dehaze, LightModeOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import {useTheme} from '@mui/material';

const Navbar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

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
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar