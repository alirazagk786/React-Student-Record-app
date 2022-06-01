import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledToolbar=styled(Toolbar)({
    display:"flex" ,
     justifyContent:"center" 
})

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar sx={{ }} >
          <Typography variant="h6" color="inherit" component="div">
            Student Record
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
