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
                Hi! I’m Maia Wilson and I’m an 11th grade student at Hunter
                College High School in New York.
                <br />
                <br />
                I’ve been creating drawings non-stop since I was a child,
                scribbling characters on whatever surface I could find. As I’ve
                gotten older I’ve experimented with more media, filling out
                sketchbook after sketchbook, often with characters from my
                imagination.
                <br />
                <br />
                But it wasn’t until I attended the summer program at Cooper
                Union that I finally had an opportunity to experiment with many
                more non-traditional media including ink, charcoal, oil paints,
                and pastels.
                <br />
                <br />
                I won a Scholastic Art and Writers Awards gold key for my
                Exhibition Piece <a href='/'>“Intimate”</a>.
                <br />
                <br />
                This year I’m taking Advanced Placement (AP) Drawing and
                experimenting with printing and cut-paper techniques as well as
                refining my digital style.
                <br />
                <br />
                I’m planning on incorporating some of the engineering knowledge
                I’ve learned in robotics to bring to life moving sculptures and
                dolls based on some of the characters that I’ve been sketching
                all these years.
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
