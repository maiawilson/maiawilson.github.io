import React from "react";
import NavBar from "../components/NavBar";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <NavBar darkText={true} />
      <Box mx={5} pt={3}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box px={6} py={4} display={"flex"} justifyContent={"center"}>
              <Typography align={"left"}>
                Hi! I’m Maia Wilson, I'm from New York City, and I’m currently a first-year at Yale University.
                <br />
                <br />
                I’ve been creating drawings nonstop since I was a child,
                scribbling doodles on whatever surface I could find. 
                I filled out sketchbook after sketchbook with characters from my
                imagination and attempts at capturing real life.
                <br />
                <br />
                After attending a summer program at Cooper Union, a whole new set 
                of media was opened up to me. I fell in love with inks, charocal, 
                oil paints, and pastels. At a RISD printmaking program two
                summers later, I learned the art of screenprinting. Both programs
                allowed me to exhibit my art in a formal setting. I won a 
                Scholastic Art and Writers Awards gold key for one of these exhibition 
                pieces <a href='/'>“Intimate”</a>.
                <br />
                <br />
                In my junior year, I took Advanced Placement (AP) Drawing and
                experimented with cut-paper techniques and honed in on exploring
                the beauty of my close bond with my sisters. In senior year, I took
                AP Art History and exposed myself to more artistic references. 
                <br />
                <br />
                Now, I'm pursuing a STEM degree and hoping to incorporate technology
                into my art. I'm experimenting with short film projects, paper dolls,
                moving sculptures, and as always, tons of sketching. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box px={6} py={4}>
              <img
                src={"images/about_pfp.png"}
                alt=""
                className="img"
                style={{ width: "70%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
