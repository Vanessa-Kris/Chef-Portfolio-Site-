import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <Box sx={{ mb: { md: 15, sm: 7, xs: 7 }, mt: { md: 25, sm: 4, xs: 3 } }}>
      <Box sx={{ px: { md: 7, sm: 7, xs: 2 } }}>
        <Typography variant="h1">You are Lost!</Typography>
        <Typography variant="p">Let's get you back</Typography>
        <Button component="a" href="/" sx={{ textDecoration: "none" }}>
          Home
        </Button>
      </Box>
    </Box>
  );
}
