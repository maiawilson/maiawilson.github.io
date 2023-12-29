import React from "react";
import { Grid, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box mx={3} pb={2}>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={5}></Grid>
        <Grid item xs={4} sm={2} align='center'>
          <a
            href="https://www.linkedin.com/in/maia-wilson-317161285/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
          </a>
        </Grid>
        <Grid item xs={4} sm={5}></Grid>
      </Grid>
    </Box>
  );
}
