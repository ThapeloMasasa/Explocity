import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ReactRoundedImage from "react-rounded-image"
import useStyles from './styles.js';
import logo from '../../logo.jpg';


const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          <div className={classes.newDiv}>
        <ReactRoundedImage image={logo} 
         roundedSize="1"
         imageWidth="80"
         imageHeight="80"
        /></div>
          
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore The World
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;