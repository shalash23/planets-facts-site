import { Paper, Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { planetContext } from "../Store/PlanetsContext";
export default function NavBar() {
  const [planets] = useContext(planetContext);

  return (
    <Paper
      variant="outlined"
      sx={{
        backgroundColor: "transparent",
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        component="p"
        variant="h3"
        sx={{
          cursor: "pointer",
          textTransform: "uppercase",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#f3f3f3",
            fontSize: "2rem",
          }}
        >
          The Planets
        </Link>
      </Button>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {planets.map((planet) => {
          return (
            <React.Fragment key={planet.name}>
              <Button variant="filled">
                <Link
                  to={`/${planet.name}`}
                  style={{
                    textDecoration: "none",
                    color: "#828291",
                  }}
                >
                  {planet.name}
                </Link>
              </Button>
            </React.Fragment>
          );
        })}
      </Box>
    </Paper>
  );
}
