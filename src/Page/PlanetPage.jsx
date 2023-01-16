import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useContext } from "react";
import images from "../../assets/index";
import { planetContext } from "../Store/PlanetsContext";

export default function PlanetPage({ location }) {
  const planets = useContext(planetContext)[0];

  const locationObj =
    typeof location === "string"
      ? location
      : location.pathname.replace("/", "");
  const planetImage = `planet${locationObj}`;

  const planetProp = planets.filter((planet) => {
    if (planet.name === locationObj) return planet;
  })[0];
  console.log(images["planetEarth"]);

  return (
    <Fragment>
      <Container
        fixed
        sx={{
          py: 8,
        }}
      >
        <AnimatePresence>
          <Grid
            container
            spacing={6}
            component={motion.div}
            sx={{
              outline: "1px solid green",
            }}
          >
            <Grid item xs={7}>
              <motion.img
                src={images[planetImage]}
                alt={`Planet ${locationObj} Picture`}
                style={{
                  width: "100%",
                  objectFit: "fill",
                }}
                initial={{
                  x: 50,
                  scale: 0,
                }}
                animate={{ rotate: 360, x: 0, scale: 1 }}
                transition={{
                  rotate: { repeat: Infinity, duration: 25 },
                  scale: { duration: 1, repeat: 0 },
                }}
                exit={{
                  opacity: 0,
                  x: -200,
                  scale: 0.4,
                }}
              />
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                outline: "1px solid green",
              }}
            >
              <Typography
                component={motion.h1}
                variant="h2"
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                }}
              >
                {planetProp.name}
              </Typography>
              <Typography component="p" variant="subtitle2">
                {planetProp.overview.content}
              </Typography>
            </Grid>
          </Grid>
        </AnimatePresence>
      </Container>
    </Fragment>
  );
}
