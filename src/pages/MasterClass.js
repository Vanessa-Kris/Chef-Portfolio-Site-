import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box, Grid } from "@mui/material";
import React from "react";

export default function MasterClass() {
  return (
    <Box
      sx={{
        mb: { md: 15, sm: 7, xs: 7 },
        mt: { md: 15, sm: 12, xs: 10 },
        px: { md: 7, sm: 7, xs: 2 },
      }}
    >
      <Typography variant="h4" textAlign="center">
        Ready to take your culinary skill to the next level?
      </Typography>
      <Typography variant="h4" textAlign="center">
        Learn from the best of the best.
      </Typography>

      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          display="flex"
          alignContent="center"
          mx="auto"
        >
          <Card sx={{ maxWidth: 350, mt: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-psd/delicious-food-asian-social-media-template_505751-2991.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Master Class
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Master Classs are a widespread group of squamate reptiles,
                  with over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Register
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*  */}
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          display="flex"
          alignContent="center"
          mx="auto"
        >
          <Card sx={{ maxWidth: 350, mt: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-psd/food-menu-restaurant-social-media-banner-template_106176-1304.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Master Class
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Master Classs are a widespread group of squamate reptiles,
                  with over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Register
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
