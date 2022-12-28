import React from 'react'
import { AppBar, IconButton, InputBase, Toolbar, Box } from '@mui/material';
import { DarkModeOutlined, Dehaze, LightModeOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import {useTheme} from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar sx={{
      position: "static",
      background: "none",
      boxShadow: "none"
      }}>
      
      <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box>
        <IconButton  onClick={(e) => console.log("hello")}>
          <Dehaze/>
        </IconButton>
        
      <InputBase placeholder='Search'/>

        <IconButton>
          <Search/>
        </IconButton>
        </Box>
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