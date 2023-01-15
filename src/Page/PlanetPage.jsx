import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useContext } from "react";
import images from "../../assets/index";
import { planetContext } from "../Store/PlanetsContext";

export default function PlanetPage({ location }) {
  const planets = useContext(planetContext);

  const locationObj =
    typeof location === "string"
      ? location
      : location.pathname.replace("/", "");

  return (
    <Fragment>
      <Container
        fixed
        sx={{
          py: 8,
        }}
      >
        <AnimatePresence mode="wait">
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <motion.img
                src={images.planetEarth}
                alt={`${locationObj} Picture`}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography component="h1" variant="h2">
                {locationObj}
              </Typography>
              <Typography component="p" variant="subtitle2"></Typography>
            </Grid>
          </Grid>
        </AnimatePresence>
      </Container>
    </Fragment>
  );
}
