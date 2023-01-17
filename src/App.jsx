import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import PlanetPage from "./Page/PlanetPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Background from "./Background";
import NavBar from "./Components/NavBar";
import PlanetContextProverider from "./Store/PlanetsContext";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
export default function App() {
  const location = useLocation();
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#070724",
      },
    },
  });
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const element = useRoutes([
    {
      path: "/",
      element: <PlanetPage location="Earth" />,
    },
    {
      path: "/:planet",
      element: <PlanetPage location={location} />,
    },
  ]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <PlanetContextProverider>
          <CssBaseline />
          <Container
            maxWidth={false}
            sx={{
              minHeight: "100vh",
            }}
            disableGutters
          >
            <Background />
            <NavBar />
            <AnimatePresence mode="wait">
              {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
          </Container>
        </PlanetContextProverider>
      </ThemeProvider>
    </div>
  );
}
