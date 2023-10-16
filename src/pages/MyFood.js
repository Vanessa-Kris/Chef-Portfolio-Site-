import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Menu from "../components/Menu";
import SimpleMap from "../components/Map";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

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
        <Typography
          align="center"
          variant="h2"
          sx={{ pb: 10, fontWeight: 500 }}
        >
          About My Food By Hilda
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
            sx={{ p: { md: 0, sm: 3, xs: 2 }, color: "#424242" }}
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
      {/*  */}
      <Box
        sx={{
          px: { md: 10, sm: 7, xs: 3 },
          bgcolor: "#ebe4e7",
          py: { md: 15, sm: 7, xs: 3 },
        }}
      >
        <Typography
          align="center"
          variant="h2"
          sx={{ pb: 10, fontWeight: 500 }}
        >
          Visit Us
        </Typography>

        <SimpleMap />
      </Box>
      {/*  */}
      <Box
        align="center"
        sx={{
          px: { md: 10, sm: 7, xs: 3 },

          py: { md: 15, sm: 7, xs: 7 },
        }}
      >
        <Typography align="center" variant="p" sx={{ py: 7, color: "#424242" }}>
          Want a special seat?
        </Typography>
        <Typography align="center" variant="h2" sx={{ py: 5, fontWeight: 500 }}>
          Make A Reservation
        </Typography>
        <Button variant="contained" sx={{ p: 2 }}>
          <FaPhone style={{ marginRight: 10 }} /> Place Call{" "}
        </Button>
        <Button variant="contained" sx={{ p: 2, ml: 3 }}>
          <FaWhatsapp style={{ marginRight: 10 }} /> Whatsapp
        </Button>
      </Box>
      {/*  */}
      <Box
        sx={{
          px: { md: 10, sm: 7, xs: 3 },
          bgcolor: "#ebe4e7",
          py: { md: 15, sm: 7, xs: 3 },
        }}
      >
        <Typography
          align="center"
          variant="h2"
          sx={{ pb: 10, fontWeight: 500 }}
        >
          Meet The Team
        </Typography>
        <Grid container columnSpacing={4}>
          <Grid item md={3} sm={3} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/young-smiling-afro-american-cook-chef-uniform-crosses-arms-isolated-orange-wall_141793-33424.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
            <Typography variant="h5" sx={{ pt: 3, color: "#424242" }}>
              Chef Lorem
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/view-chef-working-kitchen_23-2149728026.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
            <Typography variant="h5" sx={{ pt: 3, color: "#424242" }}>
              Chef Lorem
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/young-smiling-afro-american-cook-chef-uniform-holds-cake-plate-points-with-hand-isolated-white-wall_141793-33438.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
            <Typography variant="h5" sx={{ pt: 3, color: "#424242" }}>
              Chef Lorem
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/young-african-american-female-posing-yellow_181624-52051.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
            <Typography variant="h5" sx={{ pt: 3, color: "#424242" }}>
              Chef Lorem
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
