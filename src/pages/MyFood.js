import { Box, Grid, Typography, Button } from "@mui/material";
import { FaAnglesRight } from "react-icons/fa6";
import React from "react";
import Menu from "../components/Menu";

export default function MyFood() {
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{
              display: { md: "block", sm: "block", xs: "none" },
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              // style={{ width: "300px" }}
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", sm: "block", xs: "none" } }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              sx={{ width: { md: "300px", xs: "400px" } }}
            >
              <source src="/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            <video autoPlay loop muted style={{ width: "300px" }}>
              <source src="/vid8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", sm: "block", xs: "block" } }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              //style={{ width: "300px" }}
            >
              <source src="/vid7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              style={{ width: "300px" }}
            >
              <source src="/vid5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Box component="video" autoPlay loop muted>
              <source src="/vid3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box
        sx={{
          px: { md: 10, sm: 7, xs: 3 },
          bgcolor: "#ebe4e7",
          py: { md: 15, sm: 7, xs: 3 },
        }}
      >
        <Typography align="center" variant="h2" sx={{ pb: 10 }}>
          About My Food By Hila
        </Typography>

        <Grid container sx={{ px: { md: 10, sm: 7, xs: 5 } }}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="/21.jpeg"
              sx={{ width: { md: "550px", sm: "100%", xs: "100%" } }}
            />
          </Grid>
          <Grid
            justifyContent="cneter"
            alignContent="center"
            margin="auto"
            item
            md={6}
            sm={6}
            xs={12}
            sx={{ p: { md: 0, sm: 3, xs: 2 } }}
          >
            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula, sem eu tincidunt faucibus, quam justo convallis quam,
              non accumsan ligula risus id elit. Nunc eget justo et quam
              bibendum tincidunt. Proin viverra aliquam tellus, eget iaculis mi
              vulputate quis. Integer nec urna a nisi consequat tristique in non
              nisl.
            </Typography>
            <br />
            <Typography variant="h5">
              {" "}
              Sed euismod ante in sapien feugiat, sed hendrerit orci eleifend.
              Suspendisse potenti. Phasellus auctor euismod mi, non bibendum
              neque tincidunt vel. Integer ac dictum justo.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Menu />
    </Box>
  );
}
