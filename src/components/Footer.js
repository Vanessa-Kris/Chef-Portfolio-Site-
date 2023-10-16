import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaRegEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: "#fff",
        py: 3,
      }}
    >
      <Grid
        sx={{ px: { md: 10, sm: 8, xs: 5 } }}
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Grid item md={3} xs={12}>
          <Typography variant="h4">Hilda Baci</Typography>
          <Box sx={{ pt: 3 }}>
            <Typography variant="body">
              Some Location in the heart of Lagos, Nigeria
            </Typography>
            <br />
            <Typography variant="body">+234 123 457 900</Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          justifyContent={{ md: "flex-end", xs: "flex-start" }}
          display="flex"
        >
          <Box>
            <List>
              <Typography variant="h6">
                {" "}
                <ListItem>Links</ListItem>
              </Typography>
              <ListItem>Biography</ListItem>
              <ListItem>My Food By Hilda</ListItem>
              <ListItem>Master Class</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          justifyContent={{ md: "flex-end", xs: "center" }}
          display="flex"
        >
          <Box sx={{ display: "flex" }}>
            <FaFacebook style={{ fontSize: "28px", margin: 10 }} />
            <FaInstagram style={{ fontSize: "28px", margin: 10 }} />
            <FaLinkedin style={{ fontSize: "28px", margin: 10 }} />
            <FaTiktok style={{ fontSize: "28px", margin: 10 }} />
            <FaXTwitter style={{ fontSize: "28px", margin: 10 }} />
            <FaYoutube style={{ fontSize: "28px", margin: 10 }} />
            <FaRegEnvelope style={{ fontSize: "28px", margin: 10 }} />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4 }} />
      <Typography sx={{ textAlign: "center", pt: 2 }}>
        Copyright © 2023 Hilda Baci
      </Typography>
    </Box>
  );
}
