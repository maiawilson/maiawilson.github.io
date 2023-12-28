import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import "./NavBar.css";

export default function NavBar({ darkText }) {
  return (
    <Box mx={3} pt={2}>
      <nav>
        <Grid container spacing={1}>
          <Grid item xs={3} md={2}>
            <Box display="flex" justifyContent={"flex-start"}>
              <NavLink
                to="/"
                className={`navlink ${darkText ? "darktext" : "lighttext"}`}
              >
                MAIA WILSON
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={3} md={7} />
          <Grid item xs={2} md={1}>
            <NavLink
              to="/recents"
              className={`navlink ${darkText ? "darktext" : "lighttext"}`}
            >
              RECENTS
            </NavLink>
          </Grid>
          <Grid item xs={2} md={1}>
            <NavLink
              to="/cv"
              className={`navlink ${darkText ? "darktext" : "lighttext"}`}
            >
              CV
            </NavLink>
          </Grid>
          <Grid item xs={2} md={1}>
            <NavLink
              to="/about"
              className={`navlink ${darkText ? "darktext" : "lighttext"}`}
            >
              ABOUT
            </NavLink>
          </Grid>
        </Grid>
      </nav>
    </Box>
  );
}
