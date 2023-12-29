import React from "react";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: "url('images/main_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center, center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw"
      }}
    >
      <NavBar darkText={false}/>
    </Box>
  );
}
