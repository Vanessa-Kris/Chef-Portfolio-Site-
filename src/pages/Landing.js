import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

export default function Landing() {
  return (
    <Box>
      <Grid
        container
        sx={{ mb: { md: 15, sm: 7, xs: 7 }, mt: { md: 3, sm: 4, xs: 3 } }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box component="img" src="/5.png" sx={{ width: "100%" }} />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box component="img" src="/15.png" sx={{ width: "100%" }} />
        </Grid>
      </Grid>
      {/* Bio */}
      <Box>
        <Typography align="center" sx={{ fontWeight: 600 }} variant="h2">
          The Chef
        </Typography>
        <Grid
          container
          sx={{ mb: { md: 5, sm: 10, xs: 7 }, p: { md: 15, sm: 10, xs: 5 } }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="/9.png"
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
              Introducing Hilda Baci, an extraordinary chef who holds the world
              record for the longest hours spent cooking. Not only is she a
              culinary genius, but she also serves as the dedicated founder and
              CEO of "My Food My Hilda".
            </Typography>
            <br />
            <Typography variant="h5">
              {" "}
              Hailing from the vibrant city of Calabar, Nigeria, her passion for
              cooking has taken her to unparalleled heights in the culinary
              world.
            </Typography>
            <br />
            <Button variant="outlined" sx={{ p: 2 }}>
              Read Biography <FaAnglesRight style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* Third */}
      <Box sx={{ bgcolor: "#ebe4e7" }}>
        <Grid
          container
          columnSpacing={2}
          align="center"
          sx={{ pb: { md: 10, sm: 5, xs: 5 }, pt: { md: 10, sm: 5, xs: 5 } }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{ width: { md: "90%", sm: "90%", xs: "90%" } }}
              src="https://img.freepik.com/premium-photo/buffet-table-with-food-it-including-chicken-pork-vegetables_664601-3576.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            />
            <Button variant="outlined" sx={{ p: 2, mt: 3 }}>
              My Food By Hilda <FaAnglesRight style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{ width: { md: "90%", sm: "90%", xs: "90%" } }}
              src="https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26411.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            />
            <Button variant="outlined" sx={{ p: 2, mt: 3 }}>
              Hilda's Recipes <FaAnglesRight style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box sx={{ mb: { md: 5, sm: 10, xs: 7 }, p: { md: 15, sm: 10, xs: 5 } }}>
        <Typography
          align="center"
          sx={{ fontWeight: 600, mb: { md: 12, sm: 10, xs: 5 } }}
          variant="h2"
        >
          Hall of Fame
        </Typography>
        <Grid container>
          <Grid
            justifyContent="cneter"
            alignContent="center"
            margin="auto"
            // align="center"
            item
            md={6}
            sm={6}
            xs={12}
            sx={{ p: { md: 4, sm: 3, xs: 2 } }}
          >
            <Typography variant="h5">
              Throughout her illustrious career, Hilda has amassed a remarkable
              record of achievements and contributed significantly to society.
            </Typography>
            <br />
            <Typography variant="h5">
              She stands as the esteemed ambassador for numerous prestigious
              brands and organizations. Furthermore, she serves as an inspiring
              role model and mentor to countless individuals.
            </Typography>
            <br />
            <Button variant="outlined" sx={{ p: 2 }}>
              Read More <FaAnglesRight style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="/13.png"
              sx={{ width: { md: "450px", sm: "100%", xs: "100%" } }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
