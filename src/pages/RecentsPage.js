import React, { useState } from "react";
import {
  Modal,
  Fade,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const images = require.context("../art", true);
const imageList = images.keys().map((image) => images(image));
const imageNames = imageList.map((name) => {
  const nameParts = name.split(".")[0].split("/").pop().split("_");
  const year = nameParts.pop();
  return nameParts.join(" ") + ", " + year;
});

export default function RecentsPage() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");
  const [caption, setCaption] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value, cap) => {
    setImage(value);
    setCaption(cap);
    setOpen(true);
  };

  return (
    <Box>
      <NavBar darkText={true} />
      <Box m={5} pt={2}>
        <Grid container>
          {imageList.map((tile, i) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  style={{
                    height: "18em",
                    padding: 15,
                    objectFit: "cover",
                  }}
                >
                  <img
                    src={tile}
                    alt=""
                    onClick={(e) => handleImage(tile, imageNames[i])}
                    style={{
                      width: "100%",
                      height: "80%",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    align="right"
                    style={{
                      paddingRight: 5,
                    }}
                  >
                    {imageNames[i]}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade in={open} timeout={500}>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              sx={{ height: "80%", maxWidth: "80%", outline: "none" }}
            >
              <img
                src={image}
                alt=""
                style={{ outline: "none", maxHeight: "100%", maxWidth: "100%" }}
              />
              <Typography variant='h5' align="right" color="white">
                {caption}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Box>
      <Footer />
    </Box>
  );
}
