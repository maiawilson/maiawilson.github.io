import React from "react";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export default function CVPage() {
  return (
    <div>
      <NavBar darkText={true} />
      <Box m={5} px={10}>
        <iframe
          src="images/MaiaWilson_CV.pdf"
          height="1200px"
          width="100%"
          title="resume"
          loading="lazy"
        />
      </Box>
      <Footer />
    </div>
  );
}
