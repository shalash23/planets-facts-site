import {
  Container,
  Typography,
  Grid,
  Link,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Fragment, useContext, useState, useEffect } from "react";
import images from "../../assets/index";
import { planetContext } from "../Store/PlanetsContext";

export default function PlanetPage({ location }) {
  const [overViewVisibility, setOverViewVisibility] = useState(true);
  const [geologyVisibility, setGeoelogyVisibility] = useState(false);
  const [structureVisibility, setStructureVisibility] = useState(false);
  let planetStructure = overViewVisibility
    ? "overview"
    : geologyVisibility
    ? "geology"
    : "structure";
  const planets = useContext(planetContext)[0];

  const locationObj =
    typeof location === "string"
      ? location
      : location.pathname.replace("/", "");

  // Dynamic Images
  const planetImage = overViewVisibility
    ? `planet${locationObj}`
    : geologyVisibility
    ? `geology${locationObj}`
    : `planet${locationObj}Internal`;

  const planetProp = planets.filter((planet) => {
    if (planet.name === locationObj) return planet;
  })[0];

  return (
    <Fragment key={location.pathname}>
      <Container
        sx={{
          py: 3,
        }}
        disableGutters
        fixed
      >
        <Grid container component={motion.div}>
          <Grid
            item
            xs={4}
            sx={{
              mr: 28,
              mt: 12,
            }}
          >
            <motion.img
              key={images[planetImage]}
              src={images[planetImage]}
              alt={`Planet ${locationObj} Picture`}
              style={{
                width: "100%",
                objectFit: "fill",
              }}
              initial={{
                x: 250,
                scale: 0,
              }}
              animate={{ x: 0, scale: 1 }}
              transition={{
                scale: { duration: 1.4, repeat: 0 },
                default: { ease: "linear" },
              }}
              exit={{
                scale: 0.003,
                x: -250,
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              component={motion.h1}
              variant="h1"
              initial={{ opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stifness: 30,
              }}
              sx={{
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              {planetProp.name}
            </Typography>
            <Typography
              key={planetProp[planetStructure].content}
              component={motion.p}
              variant="h6"
              sx={{ mb: 2 }}
              initial={{ scale: 0, x: -200 }}
              animate={{ scale: 1, x: 0 }}
              exit={{
                scale: 0,
                x: 200,
              }}
              transition={{ type: "spring", stifness: 100 }}
            >
              {planetProp[planetStructure].content}
            </Typography>
            <Typography
              component={motion.a}
              sx={{
                color: "#828291",
              }}
              exit={{ opacity: 0 }}
            >
              Source :{" "}
              <Link
                href={planetProp.overview.source}
                sx={{
                  color: "#828291",
                  cursor: "pointer",
                }}
              >
                Wikipedia
              </Link>
            </Typography>
            <Stack
              spacing={3}
              sx={{
                mt: 3,
              }}
            >
              <Button
                component={motion.div}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  px: 5,
                  py: 2,
                  textTransform: "uppercase",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setOverViewVisibility(true);
                  setGeoelogyVisibility(false);
                  setStructureVisibility(false);
                }}
              >
                overview
              </Button>
              <Button
                component={motion.div}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  px: 5,
                  py: 2,
                  textTransform: "uppercase",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setOverViewVisibility(false);
                  setGeoelogyVisibility(true);
                  setStructureVisibility(false);
                }}
              >
                structure
              </Button>
              <Button
                component={motion.div}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  px: 5,
                  py: 2,

                  textTransform: "uppercase",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setOverViewVisibility(false);
                  setGeoelogyVisibility(false);
                  setStructureVisibility(true);
                }}
              >
                geology
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
