import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../App.css";

export default function Menu() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 0 }}>
      <Typography align="center" variant="h2" sx={{ pb: 10 }}>
        Menu
      </Typography>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress, color: "black" }}
        />
      </svg>

      <Typography variant="h4" sx={{ my: { md: 3, xs: 3 } }}>
        Your Faves
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>
      <ul ref={ref} className="list">
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/baked-quails-pan-dark-surface_2829-5596.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            E-commerce website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://stunnersgalleria.com"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Stunners Galleria
          </Typography>
        </li>

        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Blogging Website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://blog.stunnersgalleria.com/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Stunners Galleria Blog
          </Typography>
        </li>

        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Corporate Website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://smswithoutborders.com/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            SMS Without Borders
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25887.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            User analytics board
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://smswithoutborders.com:8080/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            SMS Without Borders Open Telemetry
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Messaging Website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/deku-messaging/Deku-Web-FE"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Afkanerd Deku Messaging
          </Typography>
        </li>

        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            E-learning Platform
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Career Navigator Academy
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Blogging web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://sheba-chris.netlify.app"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Sheba's Blog
          </Typography>
        </li>
      </ul>
      {/*  */}
      <Typography variant="h4" sx={{ my: { md: 3, xs: 3 } }}>
        Intercontinental Dishes
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>
      <ul ref={ref} className="list">
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/spiral-pasta-with-salmon-vegetables_1150-18487.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Resturant website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://aroma-kitchen.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Aroma Kitchen
          </Typography>
        </li>

        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Portfolio management website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://impact-investment.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Impact Investment
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27184.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Developer Portfolio website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://vanessa-kris.github.io/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            DevFolio
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Corporate website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://afkanerd.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Vanessa Tech
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637289.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Portfolio website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://vanessachristopher.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Vanessa Christopher
          </Typography>
        </li>
      </ul>

      {/*  */}
      <Typography variant="h4" sx={{ my: { md: 3, xs: 3 } }}>
        Continental Dishes
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>
      <ul ref={ref} className="list">
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/spiral-pasta-with-salmon-vegetables_1150-18487.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Resturant website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://aroma-kitchen.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Aroma Kitchen
          </Typography>
        </li>

        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Portfolio management website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://impact-investment.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Impact Investment
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27184.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Developer Portfolio website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://vanessa-kris.github.io/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            DevFolio
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Corporate website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://afkanerd.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Vanessa Tech
          </Typography>
        </li>
        <li className="listitems">
          <img
            src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637289.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            alt=""
          />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Portfolio website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://vanessachristopher.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Vanessa Christopher
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
