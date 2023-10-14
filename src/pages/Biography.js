import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Biography() {
  return (
    <Box>
      <Box
        sx={{
          mb: { md: 15, sm: 7, xs: 7 },
          mt: { md: 3, sm: 4, xs: 3 },
          px: { md: 7, sm: 7, xs: 2 },
        }}
      >
        <Grid
          container
          sx={{ mb: { md: 5, sm: 10, xs: 7 }, p: { md: 15, sm: 10, xs: 5 } }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Box
              component="img"
              src="/18.png"
              sx={{ width: { md: "550px", sm: "100%", xs: "100%" } }}
            />
          </Grid>
          <Grid
            justifyContent="cneter"
            alignContent="center"
            margin="auto"
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ p: { md: 0, sm: 3, xs: 2 } }}
          >
            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod quam id arcu bibendum, ac fringilla dolor bibendum.
              Integer congue nisl a lorem sollicitudin, vel ullamcorper turpis
              bibendum. Nullam vel nunc sed arcu elementum feugiat ac a urna.
              Sed vitae neque quis nulla bibendum iaculis. Curabitur at congue
              mauris.
            </Typography>
            <br />
            <Typography variant="h5">
              {" "}
              Sed vehicula vitae nulla ac eleifend. Pellentesque sed velit vel
              mi tincidunt elementum. Proin sit amet erat vitae odio tincidunt
              pharetra. Vivamus a libero vel odio interdum euismod.
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#ebe4e7",
          px: { md: 7, sm: 7, xs: 2 },
          py: 5,
          textAlign: "center",
        }}
      >
        <Box sx={{ mx: { md: 13, sm: 7, xs: 3 } }}>
          <Typography variant="h4">FAQs</Typography>
          <Box sx={{ py: { md: 3, sm: 3, xs: 3 } }}>
            <Typography variant="h6">Full Name?</Typography>
            <Typography variant="p">Hilda Baci</Typography>
          </Box>
          <Box sx={{ py: { md: 3, sm: 3, xs: 3 } }}>
            <Typography variant="h6">Where is Hilda From?</Typography>
            <Typography variant="p">Akwa Ibom State, Nigeria</Typography>
          </Box>
          <Box sx={{ py: { md: 3, sm: 3, xs: 3 } }}>
            <Typography variant="h6">Is Hilda Married?</Typography>
            <Typography variant="p">No Hilda Baci is single</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
